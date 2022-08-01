import { store, log, Address } from "@graphprotocol/graph-ts";
import {
  Mint,
  Register,
  Share,
  Transfer,
  Unshare,
} from "../generated/MetadriveFile/MetadriveFile";
import { User, File, FileShare } from "../generated/schema";

export const handleMint = (event: Mint): void => {
  const file = new File(event.params.tokenId.toString());
  file.owner = event.params.to.toHexString();
  file.tokenId = event.params.tokenId;
  file.uri = event.params.uri;
  file.save();

  const fileShare = new FileShare(file.id + "-" + file.owner);
  fileShare.file = file.id;
  fileShare.user = file.owner;
  fileShare.fileKey = event.params.fileKey;
  fileShare.save();
};

export const handleRegister = (event: Register): void => {
  const user = new User(event.params.origin.toHexString());
  user.address = event.params.origin;
  user.publicKey = event.params.publicKey;
  user.save();
};

export const handleShare = (event: Share): void => {
  const fileShare = new FileShare(
    event.params.tokenId.toString() + "-" + event.params.to.toHexString()
  );
  fileShare.file = event.params.tokenId.toString();
  fileShare.user = event.params.to.toHexString();
  fileShare.fileKey = event.params.fileKey;
  fileShare.save();
};

export function handleTransfer(event: Transfer): void {
  if (event.params.from === Address.zero()) {
    return;
  }

  const file = File.load(event.params.tokenId.toString());
  if (!file) {
    log.error("File entity not found for Transfer event", []);
    return;
  }

  file.owner = event.params.to.toHexString();
  file.save();
}

export function handleUnshare(event: Unshare): void {
  store.remove(
    "FileShare",
    event.params.tokenId.toString() + "-" + event.params.to.toHexString()
  );
}
