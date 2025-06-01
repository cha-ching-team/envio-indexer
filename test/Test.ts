import assert from "assert";
import { 
  TestHelpers,
  ChaChing_BountyClaimed
} from "generated";
const { MockDb, ChaChing } = TestHelpers;

describe("ChaChing contract BountyClaimed event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ChaChing contract BountyClaimed event
  const event = ChaChing.BountyClaimed.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("ChaChing_BountyClaimed is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ChaChing.BountyClaimed.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualChaChingBountyClaimed = mockDbUpdated.entities.ChaChing_BountyClaimed.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedChaChingBountyClaimed: ChaChing_BountyClaimed = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      bountyId: event.params.bountyId,
      recipient: event.params.recipient,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualChaChingBountyClaimed, expectedChaChingBountyClaimed, "Actual ChaChingBountyClaimed should be the same as the expectedChaChingBountyClaimed");
  });
});
