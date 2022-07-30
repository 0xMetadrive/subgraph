import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  Mint,
  Register,
  Share,
  Transfer,
  Unshare
} from "../generated/MetadriveFile/MetadriveFile"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createMintEvent(
  tokenId: BigInt,
  to: Address,
  uri: string,
  fileKey: string
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("fileKey", ethereum.Value.fromString(fileKey))
  )

  return mintEvent
}

export function createRegisterEvent(addr: Address, publicKey: Bytes): Register {
  let registerEvent = changetype<Register>(newMockEvent())

  registerEvent.parameters = new Array()

  registerEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  registerEvent.parameters.push(
    new ethereum.EventParam(
      "publicKey",
      ethereum.Value.fromFixedBytes(publicKey)
    )
  )

  return registerEvent
}

export function createShareEvent(
  tokenId: BigInt,
  to: Address,
  fileKey: string
): Share {
  let shareEvent = changetype<Share>(newMockEvent())

  shareEvent.parameters = new Array()

  shareEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  shareEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  shareEvent.parameters.push(
    new ethereum.EventParam("fileKey", ethereum.Value.fromString(fileKey))
  )

  return shareEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUnshareEvent(tokenId: BigInt, to: Address): Unshare {
  let unshareEvent = changetype<Unshare>(newMockEvent())

  unshareEvent.parameters = new Array()

  unshareEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  unshareEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return unshareEvent
}
