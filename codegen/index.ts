import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  findAllProperties: FindAllPropertiesReturn;
  /** Takes a propertyId and returns the property */
  findProperty: FindPropertyResult;
  /** Takes a handle and returns the user */
  findUser: FindUserResult;
};


export type QueryFindPropertyArgs = {
  handle?: InputMaybe<Scalars['String']>;
};


export type QueryFindUserArgs = {
  handle?: InputMaybe<Scalars['String']>;
};

export type FindAllPropertiesReturn = {
  __typename?: 'findAllPropertiesReturn';
  Properties?: Maybe<Array<Property>>;
  UnknownError?: Maybe<UnknownError>;
};

export type Property = {
  __typename?: 'Property';
  availabilities?: Maybe<PropertySlot>;
  bookings: Array<Booking>;
  city: Scalars['String'];
  deposit: Scalars['Int'];
  description: Scalars['String'];
  facilities: Array<Scalars['String']>;
  handle: Scalars['String'];
  hourlyPrice: Scalars['Int'];
  images: Array<Scalars['String']>;
  isVerified: Scalars['Boolean'];
  kind: Scalars['String'];
  owner?: Maybe<User>;
  partialSpace: Scalars['Boolean'];
  pickup?: Maybe<Scalars['Boolean']>;
  rules: Array<Scalars['String']>;
  serviceFee: Scalars['Int'];
  size: Scalars['Int'];
  street: Scalars['String'];
  streetNumber: Scalars['Int'];
  title: Scalars['String'];
  zip: Scalars['Int'];
};

export type PropertySlot = {
  __typename?: 'PropertySlot';
  availableDays: Array<GenericDaySlot>;
  endDate: Scalars['DateTime'];
  frequency: Frequency;
  minMonths: Scalars['Int'];
  property?: Maybe<Property>;
  propertyId: Scalars['String'];
  startDate: Scalars['DateTime'];
};

export type GenericDaySlot = {
  __typename?: 'GenericDaySlot';
  endTime: Scalars['DateTime'];
  id: Scalars['String'];
  propertySlot?: Maybe<PropertySlot>;
  propertySlotId: Scalars['String'];
  startTime: Scalars['DateTime'];
  weekday: Scalars['String'];
};

export enum Frequency {
  Biweekly = 'biweekly',
  None = 'none',
  Triweekly = 'triweekly',
  Weekly = 'weekly'
}

export type Booking = {
  __typename?: 'Booking';
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  charges: Array<CustomerCharge>;
  defaultPayment?: Maybe<PaymentInformation>;
  description?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  licenseS3Id?: Maybe<Scalars['String']>;
  passportS3Id?: Maybe<Scalars['String']>;
  paymentMethods: Array<PaymentInformation>;
  solvencyS3Id?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['Int']>;
};

export type CustomerCharge = {
  __typename?: 'CustomerCharge';
  amount?: Maybe<Scalars['Int']>;
  card?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type PaymentInformation = {
  __typename?: 'PaymentInformation';
  cardNumber?: Maybe<Scalars['String']>;
  expiryMonth?: Maybe<Scalars['Int']>;
  expiryYear?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type UnknownError = {
  __typename?: 'UnknownError';
  message: Scalars['String'];
};

export type FindPropertyResult = {
  __typename?: 'findPropertyResult';
  ClientErrorInvalidHandle?: Maybe<ClientErrorInvalidHandle>;
  ClientErrorPropertyNotExists?: Maybe<ClientErrorPropertyNotExists>;
  Property?: Maybe<Property>;
};

export type ClientErrorInvalidHandle = {
  __typename?: 'ClientErrorInvalidHandle';
  message: Scalars['String'];
};

export type ClientErrorPropertyNotExists = {
  __typename?: 'ClientErrorPropertyNotExists';
  message: Scalars['String'];
};

export type FindUserResult = {
  __typename?: 'findUserResult';
  ClientErrorInvalidHandle?: Maybe<ClientErrorInvalidHandle>;
  ClientErrorInvalidInputLength?: Maybe<ClientErrorInvalidInputLength>;
  ClientErrorUserNotExists?: Maybe<ClientErrorUserNotExists>;
  User?: Maybe<User>;
};

export type ClientErrorInvalidInputLength = {
  __typename?: 'ClientErrorInvalidInputLength';
  message: Scalars['String'];
};

export type ClientErrorUserNotExists = {
  __typename?: 'ClientErrorUserNotExists';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createListing: CreatePropertyReturn;
  createUser: Scalars['Boolean'];
  /** Edit user profile data */
  updateUser: FindUserResult;
};


export type MutationCreateListingArgs = {
  availabilities: PropertySlotInput;
  city: Scalars['String'];
  deposit: Scalars['Int'];
  description: Scalars['String'];
  facilities: Array<Scalars['String']>;
  hourlyPrice: Scalars['Int'];
  images: Array<Scalars['String']>;
  ownerId: Scalars['String'];
  partialSpace: Scalars['Boolean'];
  pickup?: InputMaybe<Scalars['Boolean']>;
  rules: Array<Scalars['String']>;
  serviceFee: Scalars['Int'];
  size: Scalars['Int'];
  street: Scalars['String'];
  streetNumber: Scalars['Int'];
  title: Scalars['String'];
  zip: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  description?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  licenseS3Id?: InputMaybe<Scalars['String']>;
  passportS3Id?: InputMaybe<Scalars['String']>;
  solvencyS3Id?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['Int']>;
};

/** PropertySlot input */
export type PropertySlotInput = {
  availableDays: Array<InputMaybe<GenericDaySlotInput>>;
  endDate: Scalars['DateTime'];
  frequency: Frequency;
  minMonths: Scalars['Int'];
  startDate: Scalars['DateTime'];
};

/** GenericDaySlot input */
export type GenericDaySlotInput = {
  endTime: Scalars['DateTime'];
  startTime: Scalars['DateTime'];
  weekday: Scalars['String'];
};

export type CreatePropertyReturn = {
  __typename?: 'createPropertyReturn';
  ClientErrorInvalidHandle?: Maybe<ClientErrorInvalidHandle>;
  ClientErrorInvalidInputLength?: Maybe<ClientErrorInvalidInputLength>;
  ClientErrorInvalidPropertyInput?: Maybe<ClientErrorInvalidPropertyInput>;
  ClientErrorUserNotExists?: Maybe<ClientErrorUserNotExists>;
  Property?: Maybe<Property>;
  UnknownError?: Maybe<UnknownError>;
};

export type ClientErrorInvalidPropertyInput = {
  __typename?: 'ClientErrorInvalidPropertyInput';
  message: Scalars['String'];
};

export type BookingSlot = {
  __typename?: 'BookingSlot';
  id: Scalars['String'];
};

export type ClientErrorInvalidGenericDaySlotInput = {
  __typename?: 'ClientErrorInvalidGenericDaySlotInput';
  message: Scalars['String'];
};

export type ClientErrorInvalidPropertySlotInput = {
  __typename?: 'ClientErrorInvalidPropertySlotInput';
  message: Scalars['String'];
};

export type FindUserQueryVariables = Exact<{
  handle: Scalars['String'];
}>;


export type FindUserQuery = { __typename?: 'Query', findUser: { __typename: 'findUserResult', User?: { __typename: 'User', email: string, handle: string, fullName: string, description?: string | null, zip?: number | null, dob?: any | null, passportS3Id?: string | null, solvencyS3Id?: string | null, licenseS3Id?: string | null, charges: Array<{ __typename?: 'CustomerCharge', amount?: number | null, date?: number | null, card?: string | null, status?: string | null, description?: string | null, invoiceId?: string | null, currency?: string | null }>, paymentMethods: Array<{ __typename?: 'PaymentInformation', cardNumber?: string | null, expiryMonth?: number | null, expiryYear?: number | null, type?: string | null }>, defaultPayment?: { __typename?: 'PaymentInformation', cardNumber?: string | null, expiryMonth?: number | null, expiryYear?: number | null, type?: string | null } | null } | null, ClientErrorUserNotExists?: { __typename: 'ClientErrorUserNotExists', message: string } | null, ClientErrorInvalidHandle?: { __typename: 'ClientErrorInvalidHandle', message: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['String']>;
  passportS3Id?: InputMaybe<Scalars['String']>;
  solvencyS3Id?: InputMaybe<Scalars['String']>;
  licenseS3Id?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'findUserResult', User?: { __typename?: 'User', id: string, fullName: string, email: string, handle: string, description?: string | null, zip?: number | null, dob?: any | null, passportS3Id?: string | null, solvencyS3Id?: string | null, licenseS3Id?: string | null } | null, ClientErrorUserNotExists?: { __typename?: 'ClientErrorUserNotExists', message: string } | null, ClientErrorInvalidInputLength?: { __typename?: 'ClientErrorInvalidInputLength', message: string } | null, ClientErrorInvalidHandle?: { __typename?: 'ClientErrorInvalidHandle', message: string } | null } };

export type CreateListingMutationVariables = Exact<{
  size: Scalars['Int'];
  title: Scalars['String'];
  ownerId: Scalars['String'];
  street: Scalars['String'];
  streetNumber: Scalars['Int'];
  zip: Scalars['Int'];
  city: Scalars['String'];
  description: Scalars['String'];
  pickup: Scalars['Boolean'];
  rules: Array<Scalars['String']> | Scalars['String'];
  hourlyPrice: Scalars['Int'];
  serviceFee: Scalars['Int'];
  facilities: Array<Scalars['String']> | Scalars['String'];
  deposit: Scalars['Int'];
  images: Array<Scalars['String']> | Scalars['String'];
  partialSpace: Scalars['Boolean'];
  availabilities: PropertySlotInput;
}>;


export type CreateListingMutation = { __typename?: 'Mutation', createListing: { __typename?: 'createPropertyReturn', Property?: { __typename?: 'Property', size: number, title: string, kind: string, street: string, streetNumber: number, zip: number, city: string, description: string, pickup?: boolean | null, facilities: Array<string>, isVerified: boolean, hourlyPrice: number, serviceFee: number, deposit: number, rules: Array<string>, owner?: { __typename?: 'User', id: string, fullName: string, email: string } | null, bookings: Array<{ __typename?: 'Booking', id: string }>, availabilities?: { __typename?: 'PropertySlot', startDate: any, endDate: any, minMonths: number, frequency: Frequency, availableDays: Array<{ __typename?: 'GenericDaySlot', weekday: string, startTime: any, endTime: any }> } | null } | null, ClientErrorUserNotExists?: { __typename?: 'ClientErrorUserNotExists', message: string } | null, ClientErrorInvalidHandle?: { __typename?: 'ClientErrorInvalidHandle', message: string } | null, ClientErrorInvalidPropertyInput?: { __typename?: 'ClientErrorInvalidPropertyInput', message: string } | null, UnknownError?: { __typename?: 'UnknownError', message: string } | null } };

export type ListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingsQuery = { __typename?: 'Query', findAllProperties: { __typename?: 'findAllPropertiesReturn', Properties?: Array<{ __typename?: 'Property', handle: string, title: string, size: number, kind: string, street: string, streetNumber: number, zip: number, city: string, description: string, pickup?: boolean | null, facilities: Array<string>, deposit: number, images: Array<string>, partialSpace: boolean, isVerified: boolean, hourlyPrice: number, serviceFee: number, rules: Array<string>, owner?: { __typename?: 'User', id: string, fullName: string, email: string, handle: string, zip: number, charges: Array<{ __typename?: 'CustomerCharge', amount?: number | null, date?: number | null, card?: string | null, status?: string | null, description?: string | null, invoiceId?: string | null, currency?: string | null }>, paymentMethods: Array<{ __typename?: 'PaymentInformation', cardNumber?: string | null, expiryMonth?: number | null, expiryYear?: number | null, type?: string | null }>, defaultPayment?: { __typename?: 'PaymentInformation', cardNumber?: string | null, expiryMonth?: number | null, expiryYear?: number | null, type?: string | null } | null } | null, bookings: Array<{ __typename?: 'Booking', id: string }>, availabilities?: { __typename?: 'PropertySlot', startDate: any, endDate: any, minMonths: number, propertyId: string, property?: { __typename?: 'Property', handle: string, title: string, size: number, kind: string, street: string, streetNumber: number, zip: number, city: string, description: string, pickup?: boolean | null, facilities: Array<string>, deposit: number, images: Array<string>, partialSpace: boolean, isVerified: boolean, hourlyPrice: number, serviceFee: number, rules: Array<string>, owner?: { __typename?: 'User', id: string, fullName: string, email: string, handle: string, zip: number, charges: Array<{ __typename?: 'CustomerCharge', amount?: number | null, date?: number | null, card?: string | null, status?: string | null, description?: string | null, invoiceId?: string | null, currency?: string | null }>, paymentMethods: Array<{ __typename?: 'PaymentInformation', cardNumber?: string | null, expiryMonth?: number | null, expiryYear?: number | null, type?: string | null }>, defaultPayment?: { __typename?: 'PaymentInformation', cardNumber?: string | null, expiryMonth?: number | null, expiryYear?: number | null, type?: string | null } | null } | null, bookings: Array<{ __typename?: 'Booking', id: string }>, availabilities?: { __typename?: 'PropertySlot', startDate: any, endDate: any, minMonths: number, propertyId: string, property?: { __typename?: 'Property', handle: string, title: string, size: number, kind: string, street: string, streetNumber: number, zip: number, city: string, description: string, pickup?: boolean | null, facilities: Array<string>, deposit: number, images: Array<string>, partialSpace: boolean, isVerified: boolean, hourlyPrice: number, serviceFee: number, rules: Array<string>, owner?: { __typename?: 'User', id: string, fullName: string, email: string, handle: string, zip: number, charges: Array<{ __typename?: 'CustomerCharge', amount?: number | null, date?: number | null, card?: string | null, status?: string | null, description?: string | null, invoiceId?: string | null, currency?: string | null }>, paymentMethods: Array<{ __typename?: 'PaymentInformation', cardNumber?: string | null, expiryMonth?: number | null, expiryYear?: number | null, type?: string | null }>, defaultPayment?: { __typename?: 'PaymentInformation', cardNumber?: string | null, expiryMonth?: number | null, expiryYear?: number | null, type?: string | null } | null } | null, bookings: Array<{ __typename?: 'Booking', id: string }>, availabilities?: { __typename?: 'PropertySlot', startDate: any, endDate: any, minMonths: number, propertyId: string, frequency: Frequency, property?: { __typename?: 'Property', handle: string, title: string, size: number } | null, availableDays: Array<{ __typename?: 'GenericDaySlot', id: string, propertySlotId: string, startTime: any, endTime: any, weekday: string, propertySlot?: { __typename?: 'PropertySlot', startDate: any } | null }> } | null } | null } | null } | null } | null }> | null, UnknownError?: { __typename?: 'UnknownError', message: string } | null } };


export const FindUserDocument = `
    query FindUser($handle: String!) {
  findUser(handle: $handle) {
    __typename
    User {
      __typename
      email
      handle
      fullName
      description
      zip
      dob
      passportS3Id
      solvencyS3Id
      licenseS3Id
      charges {
        amount
        date
        card
        status
        description
        invoiceId
        currency
      }
      paymentMethods {
        cardNumber
        expiryMonth
        expiryYear
        type
      }
      defaultPayment {
        cardNumber
        expiryMonth
        expiryYear
        type
      }
    }
    ClientErrorUserNotExists {
      __typename
      message
    }
    ClientErrorInvalidHandle {
      __typename
      message
    }
  }
}
    `;
export const useFindUserQuery = <
      TData = FindUserQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindUserQueryVariables,
      options?: UseQueryOptions<FindUserQuery, TError, TData>
    ) =>
    useQuery<FindUserQuery, TError, TData>(
      ['FindUser', variables],
      fetcher<FindUserQuery, FindUserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindUserDocument, variables),
      options
    );
export const UpdateUserDocument = `
    mutation UpdateUser($id: String, $fullName: String, $zip: Int, $description: String, $dob: String, $passportS3Id: String, $solvencyS3Id: String, $licenseS3Id: String) {
  updateUser(id: $id, fullName: $fullName, zip: $zip, description: $description, dob: $dob, passportS3Id: $passportS3Id, solvencyS3Id: $solvencyS3Id, licenseS3Id: $licenseS3Id) {
    User {
      id
      fullName
      email
      handle
      description
      zip
      dob
      passportS3Id
      solvencyS3Id
      licenseS3Id
    }
    ClientErrorUserNotExists {
      message
    }
    ClientErrorInvalidInputLength {
      message
    }
    ClientErrorInvalidHandle {
      message
    }
  }
}
    `;
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>
    ) =>
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      ['UpdateUser'],
      (variables?: UpdateUserMutationVariables) => fetcher<UpdateUserMutation, UpdateUserMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateUserDocument, variables)(),
      options
    );
export const CreateListingDocument = `
    mutation CreateListing($size: Int!, $ownerId: String!, $street: String!, $streetNumber: Int!, $zip: Int!, $city: String!, $description: String!, $pickup: Boolean!, $rules: [String!]!, $title: String!, $hourlyPrice: Int!, $serviceFee: Int!, $facilities: [String!]!, $deposit: Int!, $images: [String!]!, $partialSpace: Boolean!, $availabilities: PropertySlotInput!) {
  createListing(size: $size, ownerId: $ownerId, street: $street, streetNumber: $streetNumber, zip: $zip, city: $city, description: $description, pickup: $pickup, rules: $rules, title: $title, hourlyPrice: $hourlyPrice, serviceFee: $serviceFee, facilities: $facilities, deposit: $deposit, images: $images, partialSpace: $partialSpace, availabilities: $availabilities) {
    Property {
      size
      owner {
        id
        fullName
        email
      }
      title
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
export const useCreateListingMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateListingMutation, TError, CreateListingMutationVariables, TContext>
    ) =>
    useMutation<CreateListingMutation, TError, CreateListingMutationVariables, TContext>(
      ['CreateListing'],
      (variables?: CreateListingMutationVariables) => fetcher<CreateListingMutation, CreateListingMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateListingDocument, variables)(),
      options
    );
export const ListingsDocument = `
    query Listings {
  findAllProperties {
    Properties {
      handle
      title
      size
      owner {
        id
        fullName
        email
        handle
        zip
        charges {
          amount
          date
          card
          status
          description
          invoiceId
          currency
        }
        paymentMethods {
          cardNumber
          expiryMonth
          expiryYear
          type
        }
        defaultPayment {
          cardNumber
          expiryMonth
          expiryYear
          type
        }
      }
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
      facilities
      deposit
      images
      partialSpace
      isVerified
      hourlyPrice
      serviceFee
      rules
      availabilities {
        startDate
        endDate
        minMonths
        propertyId
        property {
          handle
          title
          size
          owner {
            id
            fullName
            email
            handle
            zip
            charges {
              amount
              date
              card
              status
              description
              invoiceId
              currency
            }
            paymentMethods {
              cardNumber
              expiryMonth
              expiryYear
              type
            }
            defaultPayment {
              cardNumber
              expiryMonth
              expiryYear
              type
            }
          }
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
          facilities
          deposit
          images
          partialSpace
          isVerified
          hourlyPrice
          serviceFee
          rules
          availabilities {
            startDate
            endDate
            minMonths
            propertyId
            property {
              handle
              title
              size
              owner {
                id
                fullName
                email
                handle
                zip
                charges {
                  amount
                  date
                  card
                  status
                  description
                  invoiceId
                  currency
                }
                paymentMethods {
                  cardNumber
                  expiryMonth
                  expiryYear
                  type
                }
                defaultPayment {
                  cardNumber
                  expiryMonth
                  expiryYear
                  type
                }
              }
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
              facilities
              deposit
              images
              partialSpace
              isVerified
              hourlyPrice
              serviceFee
              rules
              availabilities {
                startDate
                endDate
                minMonths
                propertyId
                property {
                  handle
                  title
                  size
                }
                availableDays {
                  id
                  propertySlotId
                  startTime
                  endTime
                  weekday
                  propertySlot {
                    startDate
                  }
                }
                frequency
              }
            }
          }
        }
      }
    }
    UnknownError {
      message
    }
  }
}
    `;
export const useListingsQuery = <
      TData = ListingsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: ListingsQueryVariables,
      options?: UseQueryOptions<ListingsQuery, TError, TData>
    ) =>
    useQuery<ListingsQuery, TError, TData>(
      variables === undefined ? ['Listings'] : ['Listings', variables],
      fetcher<ListingsQuery, ListingsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ListingsDocument, variables),
      options
    );