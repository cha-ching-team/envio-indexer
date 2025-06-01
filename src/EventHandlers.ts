/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ChaChing,
  ChaChing_BountyClaimed,
  ChaChing_BountyToppedUp,
  ChaChing_NewBountyRegistered,
  ChaChing_OwnershipTransferStarted,
  ChaChing_OwnershipTransferred,
} from "generated";

ChaChing.BountyClaimed.handler(async ({ event, context }) => {
  const entity: ChaChing_BountyClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    bountyId: event.params.bountyId,
    recipient: event.params.recipient,
    amount: event.params.amount,
  };

  context.ChaChing_BountyClaimed.set(entity);
});

ChaChing.BountyToppedUp.handler(async ({ event, context }) => {
  const entity: ChaChing_BountyToppedUp = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    issueUrl: event.params.issueUrl,
    token: event.params.token,
    amount: event.params.amount,
  };

  context.ChaChing_BountyToppedUp.set(entity);
});

ChaChing.NewBountyRegistered.handler(async ({ event, context }) => {
  const entity: ChaChing_NewBountyRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    bounty_0: event.params.bounty
        [0]
    ,
    bounty_1: event.params.bounty
        [1]
    ,
    bounty_2: event.params.bounty
        [2]
    ,
    bounty_3: event.params.bounty
        [3]
    ,
    bounty_4: event.params.bounty
        [4]
    ,
  };

  context.ChaChing_NewBountyRegistered.set(entity);
});

ChaChing.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: ChaChing_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.ChaChing_OwnershipTransferStarted.set(entity);
});

ChaChing.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: ChaChing_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.ChaChing_OwnershipTransferred.set(entity);
});
