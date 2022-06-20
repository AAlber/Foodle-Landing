import { apollo as server, app, router } from '../server/index';
import { seed } from '../utils/seed';
import { clean } from '../utils/clean';
import forgeJWT from '../utils/forgeJWT';

beforeAll(async () => {
  await clean();
  await seed();
});

describe('Update User', ()=>{
  const mutation = `mutation UpdateUser($id: String, $fullName: String, $zip: Int, $description: String, $dob: String, $passportS3Id: String, $solvencyS3Id: String, $licenseS3Id: String) {
  updateUser(id: $id, fullName: $fullName, zip: $zip, description: $description, dob: $dob, passportS3Id: $passportS3Id, solvencyS3Id: $solvencyS3Id, licenseS3Id: $licenseS3Id) {
    User {
      fullName
      email
      handle
      zip
      id
      dob
      description
      passportS3Id
      solvencyS3Id
      licenseS3Id
    }
    ClientErrorUserNotExists {
      message
    }
    ClientErrorInvalidHandle {
      message
    }
    ClientErrorInvalidInputLength {
      message
    }
  }
}
`;
describe('with valid data', () => {
    it('returns user if succeeded', async () => {
      const res = await server.executeOperation(
        {
          query: mutation,
          variables: { 
            id: "1",
            fullName: "jello",
            zip: 90000,
            description: "description",
            dob: "1900-01-01T00:00:00Z",
            passportS3Id: "passport?.s3Id",
            solvencyS3Id: "solvency?.s3Id",
            licenseS3Id: "license?.s3Id",
            }, //TODO get this from globals
        },
      );
      expect(res).toMatchSnapshot();
    });
    
})
describe('with invalid data-', () => {
    it('id does not return user', async () => {
      const res = await server.executeOperation(
        {
          query: mutation,
          variables: { 
            id: "-1",
            fullName: "jello",
            zip: 9000,
            description: "description",
            dob: "1900-01-01T00:00:00Z",
            passportS3Id: "passport?.s3Id",
            solvencyS3Id: "solvency?.s3Id",
            licenseS3Id: "license?.s3Id",
            }, //TODO get this from globals
        },
      );
      expect(res).toMatchSnapshot();
    });
    
})
})