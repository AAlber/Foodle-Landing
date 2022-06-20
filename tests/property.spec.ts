import { apollo as server } from '../server/index';
import { seed } from '../utils/seed';
import { clean } from '../utils/clean';

beforeAll(async () => {
  await clean();
  await seed();
});
const query = `
    mutation CreateListing($size: Int!, $ownerId: String!, $street: String!, $streetNumber: Int!, $zip: Int!, $city: String!, $title: String!, $handle:String!, $description: String!, $pickup: Boolean!, $facilities: [String!]!, $rules: [String!]!, $serviceFee: Int!, $hourlyPrice: Int!, $deposit: Int!, $images: [String!]!, $partialSpace: Boolean!, $availabilities: PropertySlotInput!) {
  createListing(size: $size, ownerId: $ownerId, street: $street, streetNumber: $streetNumber, zip: $zip, city: $city, description: $description,handle: $handle, title: $title, pickup: $pickup,  facilities: $facilities, rules: $rules, serviceFee: $serviceFee, hourlyPrice: $hourlyPrice, deposit: $deposit, images: $images, partialSpace: $partialSpace, availabilities: $availabilities) {
    Property {
      size
      owner {
        id
        fullName
        email
      }
      title
      handle
      kind
      bookings {
        id
      }
      street
      streetNumber
      zip
      city
      description
      pickup
      images
      facilities
      isVerified
      hourlyPrice
      serviceFee
      deposit
      rules
      availabilities {
        startDate
        endDate
        minMonths
        frequency
        availableDays {
          weekday
          startTime
          endTime
        }
      }
    }
    ClientErrorUserNotExists {
      message
    }
    ClientErrorInvalidHandle {
      message
    }
    ClientErrorInvalidPropertyInput {
      message
    }
    UnknownError {
      message
    }
  }
}
    `;

const stdVars = {size: 0,
        ownerId: "1",
        street: "FoodleStreet",
        streetNumber: 0, //should throw error
        zip: 0, //should throw error if < 5 digits
        city: "Germany2", // Should throw error if city contains number
        title: "titlee",
        handle: "handlee",
        description: "",
        rules: [],
        hourlyPrice: 0,
        facilities: [], //Should throw error if less than 1
        deposit: 0,
        images: [""], //Should throw error if less than one or first item is empty string
        pickup: false,
        serviceFee: 0,
        partialSpace: false,
        availabilities: {
          startDate: new Date('1900-01-01T01:00:00').toISOString(), // Should notify that startDate wasnt inserted yet
          endDate: new Date('1900-02-01T01:00:00').toISOString(), // new Date('2000-01-01T' + time + ':00').toISOString()
          availableDays: [{
            startTime: new Date('1900-01-01T01:00:00').toISOString(),
            endTime: new Date('1900-01-01T01:00:00').toISOString(),
            weekday: "Monday"
          }], // Should throw error
          minMonths: 0, // Negative values should throw errors
          frequency: "weekly", // Should be one of enum values or error
        }
      }

describe(' Property', () => {
  it('can create a listing', async () => {
    const vars = {...stdVars};
    vars.city= "Germany2";
    const res = await server.executeOperation({
      query,
      variables: {
        ...vars
      },
      },
    );
    expect(res).toMatchSnapshot();
  });
  // e.preventDefault();

  //           e.stopPropagation();'
  it('it fails when a listing city string arg out of max range', async () => {
    const vars = {...stdVars};
    vars.city= ";ew;uivhwuhwruiothpiughoreuihtbgoiuherotoibueruihotuihobuiey;ew;uivhwuhwruiothpiughoreuihtbgoiuherotoibueruihotuihobuiey;ew;uivhwuhwruiothpiughoreuihtbgoiuherotoibueruihotuihobuiey;ew;uivhwuhwruiothpiughoreuihtbgoiuherotoibueruihotuihobuiey";
    
    const res = await server.executeOperation({
      query,
      variables: {
        ...vars
      },
    });
    expect(res).toMatchSnapshot();
  });

  it('can query a single property by the handle', async () => {
    const query = `
    query Query($handle: String) {
      findProperty(handle: $handle) {
        ClientErrorInvalidHandle {
          message
        }
        Property {
          city
        }
      }
    }
    `;
    const res = await server.executeOperation({
      query,
      variables: { handle: '1' }, //TODO get this from globals
    });
    expect(res).toMatchSnapshot();
  });

  it('can query a list of multiple properties', async () => {
    const query = `
    query Query {
      findAllProperties {
        Properties {
          city
        }
        UnknownError {
          message
        }
      }
    }
    `;
    const res = await server.executeOperation({
      query,
    });
    expect(res).toMatchSnapshot();
  });
});