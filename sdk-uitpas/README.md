# @steinv/publiq-uitpas-sdk@1.0.0

A TypeScript SDK client for the api-test.uitpas.be API.

## Usage

First, install the SDK from npm.

```bash
npm install @steinv/publiq-uitpas-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  AssociationsApi,
} from '@steinv/publiq-uitpas-sdk';
import type { DeletePassholdersPassholderIdAssociationMembershipsAssociationIdRequest } from '@steinv/publiq-uitpas-sdk';

async function example() {
  console.log("🚀 Testing @steinv/publiq-uitpas-sdk SDK...");
  const config = new Configuration({ 
  });
  const api = new AssociationsApi(config);

  const body = {
    // string | Unique ID of an UiTPAS passholder.
    passholderId: passholderId_example,
    // string | ID of the association.
    associationId: associationId_example,
    // string | ID of the organizer.
    organizerId: organizerId_example,
  } satisfies DeletePassholdersPassholderIdAssociationMembershipsAssociationIdRequest;

  try {
    const data = await api.deletePassholdersPassholderIdAssociationMembershipsAssociationId(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api-test.uitpas.be*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AssociationsApi* | [**deletePassholdersPassholderIdAssociationMembershipsAssociationId**](docs/AssociationsApi.md#deletepassholderspassholderidassociationmembershipsassociationid) | **DELETE** /passholders/{passholderId}/association-memberships/{associationId} | Delete association membership of passholder
*AssociationsApi* | [**getAssociations**](docs/AssociationsApi.md#getassociations) | **GET** /associations | Get associations
*AssociationsApi* | [**getPassholdersPassholderIdAssociationMemberships**](docs/AssociationsApi.md#getpassholderspassholderidassociationmemberships) | **GET** /passholders/{passholderId}/association-memberships | Get association memberships of passholder
*AssociationsApi* | [**postPassholdersPassholderIdAssociationMemberships**](docs/AssociationsApi.md#postpassholderspassholderidassociationmemberships) | **POST** /passholders/{passholderId}/association-memberships | Create or renew association membership of passholder
*CardSystemsApi* | [**getCardSystems**](docs/CardSystemsApi.md#getcardsystems) | **GET** /card-systems | Search card systems
*CardSystemsApi* | [**getCardSystemsCardsystemidMembershipPrices**](docs/CardSystemsApi.md#getcardsystemscardsystemidmembershipprices) | **GET** /card-systems/{cardSystemId}/membership-prices | Retrieve membership prices for a card system
*CardSystemsApi* | [**getCardsystemsCardsystemid**](docs/CardSystemsApi.md#getcardsystemscardsystemid) | **GET** /card-systems/{cardSystemId} | Retrieve card system
*CardSystemsApi* | [**getCardsystemsCardsystemidCitySettings**](docs/CardSystemsApi.md#getcardsystemscardsystemidcitysettings) | **GET** /card-systems/{cardSystemId}/city-settings | Retrieve city settings for card system
*CardSystemsApi* | [**getCardsystemsCardsystemidSocialTariffSettings**](docs/CardSystemsApi.md#getcardsystemscardsystemidsocialtariffsettings) | **GET** /card-systems/{cardSystemId}/social-tariff-settings | Retrieve social tariff settings for card system
*CardsApi* | [**getCards**](docs/CardsApi.md#getcards) | **GET** /cards | Retrieve card status
*CardsApi* | [**getCardsSocialTariffCardSystemIdActive**](docs/CardsApi.md#getcardssocialtariffcardsystemidactive) | **GET** /cards/social-tariff/{cardSystemId}/active | Retrieve all valid social tariff cards
*CheckinsApi* | [**getCheckinStatus**](docs/CheckinsApi.md#getcheckinstatus) | **GET** /checkin-status | Get checkin status
*CheckinsApi* | [**postCheckins**](docs/CheckinsApi.md#postcheckins) | **POST** /checkins | Check in passholder
*CurrentPassholderApi* | [**getPassholdersMe**](docs/CurrentPassholderApi.md#getpassholdersme) | **GET** /passholders/me | Retrieve passholder for the current user
*CurrentPassholderApi* | [**getUitidPassholderRegistrationToken**](docs/CurrentPassholderApi.md#getuitidpassholderregistrationtoken) | **GET** /passholders/me/uitid/registration-token | Retrieve UiTiD registration token
*CurrentPassholderApi* | [**getUitidPassholderStatus**](docs/CurrentPassholderApi.md#getuitidpassholderstatus) | **GET** /passholders/me/uitid/status | Retrieve UiTiD registration status
*CurrentPassholderApi* | [**postPassholdersMe**](docs/CurrentPassholderApi.md#postpassholdersme) | **POST** /passholders/me | Register passholder for the current user
*CurrentPassholderApi* | [**registerUitidPassholder**](docs/CurrentPassholderApi.md#registeruitidpassholder) | **PUT** /passholders/me/uitid | Register UiTiD for passholder
*EventsApi* | [**getEventsCardSystems**](docs/EventsApi.md#geteventscardsystems) | **GET** /events/{eventId}/card-systems | Get event card systems
*EventsApi* | [**getEventsQrCheckincodesDownloadlink**](docs/EventsApi.md#geteventsqrcheckincodesdownloadlink) | **GET** /events/{eventId}/qr-checkincodes/download-link | Get event QR checkin code as download link
*EventsApi* | [**getEventsSettings**](docs/EventsApi.md#geteventssettings) | **GET** /events/{eventId}/settings | Get event settings
*EventsApi* | [**putEventsCardSystems**](docs/EventsApi.md#puteventscardsystems) | **PUT** /events/{eventId}/card-systems | Update event card systems
*EventsApi* | [**putEventsSettings**](docs/EventsApi.md#puteventssettings) | **PUT** /events/{eventId}/settings | Update event settings
*FinancialReportsApi* | [**getOrganizersFinancialReports**](docs/FinancialReportsApi.md#getorganizersfinancialreports) | **GET** /organizers/{organizerId}/financial-reports | Get financial report exports
*FinancialReportsApi* | [**getOrganizersFinancialReportsPeriods**](docs/FinancialReportsApi.md#getorganizersfinancialreportsperiods) | **GET** /organizers/{organizerId}/financial-reports/periods | Get suggested financial report periods
*FinancialReportsApi* | [**getOrganizersFinancialReportsReportId**](docs/FinancialReportsApi.md#getorganizersfinancialreportsreportid) | **GET** /organizers/{organizerId}/financial-reports/{reportId} | Get financial report status
*FinancialReportsApi* | [**getOrganizersFinancialReportsReportIdDownloadLink**](docs/FinancialReportsApi.md#getorganizersfinancialreportsreportiddownloadlink) | **GET** /organizers/{organizerId}/financial-reports/{reportId}/download-link | Get financial report temporary download link
*FinancialReportsApi* | [**getOrganizersFinancialReportsReportIdZip**](docs/FinancialReportsApi.md#getorganizersfinancialreportsreportidzip) | **GET** /organizers/{organizerId}/financial-reports/{reportId}.zip | Download financial report
*FinancialReportsApi* | [**postOrganizersFinancialReports**](docs/FinancialReportsApi.md#postorganizersfinancialreports) | **POST** /organizers/{organizerId}/financial-reports | Start an export of a financial report
*GrouppassesApi* | [**getGrouppasses**](docs/GrouppassesApi.md#getgrouppasses) | **GET** /grouppasses | Search grouppasses
*GrouppassesApi* | [**getGrouppassesPassholderId**](docs/GrouppassesApi.md#getgrouppassespassholderid) | **GET** /grouppasses/{passholderId} | Retrieve grouppass by ID
*KioskDevicesApi* | [**deleteKiosksEvents**](docs/KioskDevicesApi.md#deletekiosksevents) | **DELETE** /kiosk-devices/events | Delete configured event
*KioskDevicesApi* | [**getKioskDevices**](docs/KioskDevicesApi.md#getkioskdevices) | **GET** /kiosk-devices | Retrieve kiosk
*KioskDevicesApi* | [**getKiosksCheckins**](docs/KioskDevicesApi.md#getkioskscheckins) | **GET** /kiosk-devices/checkins | Retrieve the current checkin event
*KioskDevicesApi* | [**getKiosksChipNumbersChipNumber**](docs/KioskDevicesApi.md#getkioskschipnumberschipnumber) | **GET** /kiosk-devices/chip-numbers/{chipNumber} | Retrieve total points of a passholder by chip number
*KioskDevicesApi* | [**getKiosksEvent**](docs/KioskDevicesApi.md#getkiosksevent) | **GET** /kiosk-devices/events | Retrieve configured event
*KioskDevicesApi* | [**postKiosksCheckin**](docs/KioskDevicesApi.md#postkioskscheckin) | **POST** /kiosk-devices/checkins | Checkin passholder via kiosk
*KioskDevicesApi* | [**putKiosksEvents**](docs/KioskDevicesApi.md#putkiosksevents) | **PUT** /kiosk-devices/events | Configure event
*KioskDevicesApi* | [**putKiosksSetup**](docs/KioskDevicesApi.md#putkioskssetup) | **PUT** /kiosk-devices/setup | Setup new kiosk device
*KiosksApi* | [**deleteKiosksKioskIdFixedEvent**](docs/KiosksApi.md#deletekioskskioskidfixedevent) | **DELETE** /kiosks/{kioskId}/fixed-event | Remove fixed event for kiosk
*KiosksApi* | [**getKiosks**](docs/KiosksApi.md#getkiosks) | **GET** /kiosks | Retrieve kiosks
*KiosksApi* | [**getKiosksKioskIdFixedEvent**](docs/KiosksApi.md#getkioskskioskidfixedevent) | **GET** /kiosks/{kioskId}/fixed-event | Retrieve fixed event of kiosk
*KiosksApi* | [**putKiosksKioskIdFixedEvent**](docs/KiosksApi.md#putkioskskioskidfixedevent) | **PUT** /kiosks/{kioskId}/fixed-event | Configure fixed event for kiosk
*OrdersApi* | [**getOrdersOrderid**](docs/OrdersApi.md#getordersorderid) | **GET** /orders/{orderId} | Retrieve order
*OrdersApi* | [**postOrders**](docs/OrdersApi.md#postorders) | **POST** /orders | Create online order
*OrganizersApi* | [**deleteOrganizersOrganizerIdAdminsAdminId**](docs/OrganizersApi.md#deleteorganizersorganizeridadminsadminid) | **DELETE** /organizers/{organizerId}/admins/{adminUserId} | Remove admin user from organizer
*OrganizersApi* | [**getOrganizers**](docs/OrganizersApi.md#getorganizers) | **GET** /organizers | Get organizers
*OrganizersApi* | [**getOrganizersOrganizerIdAdmins**](docs/OrganizersApi.md#getorganizersorganizeridadmins) | **GET** /organizers/{organizerId}/admins | Retrieve admin users for organizer
*OrganizersApi* | [**postOrganizersOrganizerIdAdmins**](docs/OrganizersApi.md#postorganizersorganizeridadmins) | **POST** /organizers/{organizerId}/admins | Add admin user for organizer
*PassholderFamilyApi* | [**deletePassholdersPassholderIdFamilyMembersFamilyMemberId**](docs/PassholderFamilyApi.md#deletepassholderspassholderidfamilymembersfamilymemberid) | **DELETE** /passholders/{passholderId}/family-members/{familyMemberId} | Delete a family member
*PassholderFamilyApi* | [**getPassholdersPassholderIdFamilies**](docs/PassholderFamilyApi.md#getpassholderspassholderidfamilies) | **GET** /passholders/{passholderId}/families | Retrieve families of the current passholder
*PassholderFamilyApi* | [**getPassholdersPassholderIdFamilyMembers**](docs/PassholderFamilyApi.md#getpassholderspassholderidfamilymembers) | **GET** /passholders/{passholderId}/family-members | Retrieve family members of the current passholder
*PassholderFamilyApi* | [**postPassholdersPassholderIdFamilyMembers**](docs/PassholderFamilyApi.md#postpassholderspassholderidfamilymembers) | **POST** /passholders/{passholderId}/family-members | Add family members to the current passholder\&#39;s family
*PassholderFamilyApi* | [**putPassholdersPassholderIdFamilyMembersFamilyMemberId**](docs/PassholderFamilyApi.md#putpassholderspassholderidfamilymembersfamilymemberid) | **PUT** /passholders/{passholderId}/family-members/{familyMemberId} | Update a family member
*PassholdersApi* | [**deletePassholdersPassholderId**](docs/PassholdersApi.md#deletepassholderspassholderid) | **DELETE** /passholders/{passholderId} | Remove passholder
*PassholdersApi* | [**deletePassholdersPassholderIdPicture**](docs/PassholdersApi.md#deletepassholderspassholderidpicture) | **DELETE** /passholders/{passholderId}/picture | Delete picture of passholder
*PassholdersApi* | [**getChipNumbersChipNumber**](docs/PassholdersApi.md#getchipnumberschipnumber) | **GET** /chip-numbers/{chipNumber} | Retrieve pass by chip number
*PassholdersApi* | [**getInszNumbersInszNumber**](docs/PassholdersApi.md#getinsznumbersinsznumber) | **GET** /insz-numbers/{inszNumber} | Retrieve pass by INSZ number
*PassholdersApi* | [**getPasses**](docs/PassholdersApi.md#getpasses) | **GET** /passes | Retrieve pass by identifier
*PassholdersApi* | [**getPassesUitpasNumber**](docs/PassholdersApi.md#getpassesuitpasnumber) | **GET** /passes/{uitpasNumber} | Retrieve pass by UiTPAS number
*PassholdersApi* | [**getPassholders**](docs/PassholdersApi.md#getpassholders) | **GET** /passholders | Search passholders
*PassholdersApi* | [**getPassholdersMembershipPricesCardSystemId**](docs/PassholdersApi.md#getpassholdersmembershippricescardsystemid) | **GET** /passholders/membership-prices/{cardSystemId} | Retrieve new membership price
*PassholdersApi* | [**getPassholdersPassholderId**](docs/PassholdersApi.md#getpassholderspassholderid) | **GET** /passholders/{passholderId} | Retrieve passholder by ID
*PassholdersApi* | [**getPassholdersPassholderIdMembershipPricesCardSystemId**](docs/PassholdersApi.md#getpassholderspassholderidmembershippricescardsystemid) | **GET** /passholders/{passholderId}/membership-prices/{cardSystemId} | Retrieve upgrade membership price
*PassholdersApi* | [**getPassholdersPassholderIdPicture**](docs/PassholdersApi.md#getpassholderspassholderidpicture) | **GET** /passholders/{passholderId}/picture | Get picture of passholder
*PassholdersApi* | [**getPassholdersPassholderIdTransactions**](docs/PassholdersApi.md#getpassholderspassholderidtransactions) | **GET** /passholders/{passholderId}/transactions | Retrieve transaction history of a passholder
*PassholdersApi* | [**passholdersStatusInszNumbersInsznumber**](docs/PassholdersApi.md#passholdersstatusinsznumbersinsznumber) | **GET** /passholders/status/insz-numbers/{inszNumber} | Retrieve the status of a passholder based on INSZ number
*PassholdersApi* | [**postPassholders**](docs/PassholdersApi.md#postpassholders) | **POST** /passholders | Register a new passholder
*PassholdersApi* | [**postPassholdersPassholderIdCheckin**](docs/PassholdersApi.md#postpassholderspassholderidcheckinoperation) | **POST** /passholders/{passholderId}/checkins | Check-in passholder using a check-in code
*PassholdersApi* | [**putPassholdersPassholderId**](docs/PassholdersApi.md#putpassholderspassholderid) | **PUT** /passholders/{passholderId} | Update a passholder
*PassholdersApi* | [**putPassholdersPassholderIdPicture**](docs/PassholdersApi.md#putpassholderspassholderidpicture) | **PUT** /passholders/{passholderId}/picture | Update picture of passholder
*PermissionsApi* | [**getPermissions**](docs/PermissionsApi.md#getpermissions) | **GET** /permissions | Get permissions
*PermissionsApi* | [**getPermissionsClientId**](docs/PermissionsApi.md#getpermissionsclientid) | **GET** /permissions/{clientId} | Get permissions for a client
*PermissionsApi* | [**putPermissionsClientId**](docs/PermissionsApi.md#putpermissionsclientid) | **PUT** /permissions/{clientId} | Update permissions for a client
*RewardsApi* | [**deleteRewardsRedeemedRedeemedRewardId**](docs/RewardsApi.md#deleterewardsredeemedredeemedrewardid) | **DELETE** /rewards/redeemed/{redeemedRewardId} | Cancel a redeemed reward
*RewardsApi* | [**getRewards**](docs/RewardsApi.md#getrewards) | **GET** /rewards | Search rewards
*RewardsApi* | [**getRewardsId**](docs/RewardsApi.md#getrewardsid) | **GET** /rewards/{rewardId} | Retrieve reward
*RewardsApi* | [**getRewardsIdRedeemStatus**](docs/RewardsApi.md#getrewardsidredeemstatus) | **GET** /rewards/{rewardId}/redeem-status | Check redeem status of a reward for a passholder
*RewardsApi* | [**getRewardsRedeemed**](docs/RewardsApi.md#getrewardsredeemed) | **GET** /rewards/redeemed | Retrieve redeemed rewards
*RewardsApi* | [**postRewards**](docs/RewardsApi.md#postrewards) | **POST** /rewards | Create new reward
*RewardsApi* | [**postRewardsRedeemed**](docs/RewardsApi.md#postrewardsredeemedoperation) | **POST** /rewards/redeemed | Redeem reward
*RewardsApi* | [**putRewardsId**](docs/RewardsApi.md#putrewardsid) | **PUT** /rewards/{rewardId} | Update reward
*SchoolsApi* | [**deletePassholdersSchool**](docs/SchoolsApi.md#deletepassholdersschool) | **DELETE** /passholders/{passholderId}/school | Delete passholder school
*SchoolsApi* | [**getPassholdersSchool**](docs/SchoolsApi.md#getpassholdersschool) | **GET** /passholders/{passholderId}/school | Get passholder school
*SchoolsApi* | [**putPassholdersSchool**](docs/SchoolsApi.md#putpassholdersschool) | **PUT** /passholders/{passholderId}/school | Update passholder school
*TicketSalesApi* | [**deleteTicketSales**](docs/TicketSalesApi.md#deleteticketsales) | **DELETE** /ticket-sales/{ticketSaleId} | Cancel a ticket sale registration
*TicketSalesApi* | [**getTariffs**](docs/TicketSalesApi.md#gettariffs) | **GET** /tariffs | Get tariffs
*TicketSalesApi* | [**getTariffsStatic**](docs/TicketSalesApi.md#gettariffsstatic) | **GET** /tariffs/static | Get static tariffs without passholder
*TicketSalesApi* | [**getTicketSales**](docs/TicketSalesApi.md#getticketsales) | **GET** /ticket-sales | Retrieve existing ticket sales
*TicketSalesApi* | [**postTicketSales**](docs/TicketSalesApi.md#postticketsales) | **POST** /ticket-sales | Register ticket sale(s)
*UiTiDApi* | [**getUitidEmail**](docs/UiTiDApi.md#getuitidemail) | **GET** /uitid/emails/{email} | Retrieve UiTiD email address status


### Models

- [Association](docs/Association.md)
- [AssociationMembership](docs/AssociationMembership.md)
- [AssociationsPaginatedResponse](docs/AssociationsPaginatedResponse.md)
- [Card](docs/Card.md)
- [CardSystem](docs/CardSystem.md)
- [CardSystemBranding](docs/CardSystemBranding.md)
- [CardSystemCitySettings](docs/CardSystemCitySettings.md)
- [CardSystemLinks](docs/CardSystemLinks.md)
- [CardSystemMembership](docs/CardSystemMembership.md)
- [CardSystemMembershipCard](docs/CardSystemMembershipCard.md)
- [CardSystemMembershipSocialTariff](docs/CardSystemMembershipSocialTariff.md)
- [CardSystemSocialTariffSettings](docs/CardSystemSocialTariffSettings.md)
- [CardSystemsPaginatedCollection](docs/CardSystemsPaginatedCollection.md)
- [Checkin](docs/Checkin.md)
- [CheckinStatus](docs/CheckinStatus.md)
- [CheckinStatusEndUserMessage](docs/CheckinStatusEndUserMessage.md)
- [City](docs/City.md)
- [DownloadLinkResponse](docs/DownloadLinkResponse.md)
- [EventCardSystem](docs/EventCardSystem.md)
- [EventCardSystemManualDistributionKeysInner](docs/EventCardSystemManualDistributionKeysInner.md)
- [EventSettings](docs/EventSettings.md)
- [FacetValue](docs/FacetValue.md)
- [FacetValueName](docs/FacetValueName.md)
- [FamilyMember](docs/FamilyMember.md)
- [GetCardsSocialTariffCardSystemIdActive200ResponseInner](docs/GetCardsSocialTariffCardSystemIdActive200ResponseInner.md)
- [GetOrganizersFinancialReportsReportIdDownloadLink200Response](docs/GetOrganizersFinancialReportsReportIdDownloadLink200Response.md)
- [GetPasses400Response](docs/GetPasses400Response.md)
- [GetPasses400ResponseEndUserMessage](docs/GetPasses400ResponseEndUserMessage.md)
- [GetPasses400ResponseSchemaErrorsInner](docs/GetPasses400ResponseSchemaErrorsInner.md)
- [GetPassholdersPassholderIdFamilies200ResponseInner](docs/GetPassholdersPassholderIdFamilies200ResponseInner.md)
- [GetRewardsIdRedeemStatus200Response](docs/GetRewardsIdRedeemStatus200Response.md)
- [GetUitidEmail200Response](docs/GetUitidEmail200Response.md)
- [GetUitidPassholderRegistrationToken200Response](docs/GetUitidPassholderRegistrationToken200Response.md)
- [GetUitidPassholderStatus200Response](docs/GetUitidPassholderStatus200Response.md)
- [Grouppass](docs/Grouppass.md)
- [GrouppassAddress](docs/GrouppassAddress.md)
- [GrouppassSocialTariff](docs/GrouppassSocialTariff.md)
- [GrouppassesPaginatedResponse](docs/GrouppassesPaginatedResponse.md)
- [KioskDevice](docs/KioskDevice.md)
- [KioskDeviceCheckinRequest](docs/KioskDeviceCheckinRequest.md)
- [KioskDeviceCheckinResponse](docs/KioskDeviceCheckinResponse.md)
- [KioskDeviceEvent](docs/KioskDeviceEvent.md)
- [KioskDeviceEventEvent](docs/KioskDeviceEventEvent.md)
- [KioskDeviceEventRequest](docs/KioskDeviceEventRequest.md)
- [KioskDeviceSetup](docs/KioskDeviceSetup.md)
- [KioskPass](docs/KioskPass.md)
- [KiosksPaginatedCollection](docs/KiosksPaginatedCollection.md)
- [LinkedOrganizerPermissions](docs/LinkedOrganizerPermissions.md)
- [Location](docs/Location.md)
- [MembershipPrice](docs/MembershipPrice.md)
- [ModelError](docs/ModelError.md)
- [Order](docs/Order.md)
- [Organizer](docs/Organizer.md)
- [OrganizerAdmin](docs/OrganizerAdmin.md)
- [OrganizerAdminsPaginatedCollection](docs/OrganizerAdminsPaginatedCollection.md)
- [OrganizerPermissions](docs/OrganizerPermissions.md)
- [OrganizersPaginatedResponse](docs/OrganizersPaginatedResponse.md)
- [Pass](docs/Pass.md)
- [PassMessagesInner](docs/PassMessagesInner.md)
- [PassSocialTariff](docs/PassSocialTariff.md)
- [Passholder](docs/Passholder.md)
- [PassholderAddress](docs/PassholderAddress.md)
- [PassholderOptInPreferences](docs/PassholderOptInPreferences.md)
- [PassholderPicture](docs/PassholderPicture.md)
- [PassholderRegistration](docs/PassholderRegistration.md)
- [PassholderRegistrationAddress](docs/PassholderRegistrationAddress.md)
- [PassholderRegistrationRegistrationSocialTariff](docs/PassholderRegistrationRegistrationSocialTariff.md)
- [PassholderSelfRegistration](docs/PassholderSelfRegistration.md)
- [PassholdersPaginatedResponse](docs/PassholdersPaginatedResponse.md)
- [PassholdersStatusInszNumbersInsznumber200Response](docs/PassholdersStatusInszNumbersInsznumber200Response.md)
- [Period](docs/Period.md)
- [PeriodLimit](docs/PeriodLimit.md)
- [Permission](docs/Permission.md)
- [PermissionDetail](docs/PermissionDetail.md)
- [PermissionDetailLabel](docs/PermissionDetailLabel.md)
- [PostPassholdersPassholderIdCheckin201Response](docs/PostPassholdersPassholderIdCheckin201Response.md)
- [PostPassholdersPassholderIdCheckinRequest](docs/PostPassholdersPassholderIdCheckinRequest.md)
- [PostRewardsRedeemedRequest](docs/PostRewardsRedeemedRequest.md)
- [RedeemedReward](docs/RedeemedReward.md)
- [RedeemedRewardRedeemInfo](docs/RedeemedRewardRedeemInfo.md)
- [RedeemedRewardsPaginatedResponse](docs/RedeemedRewardsPaginatedResponse.md)
- [Report](docs/Report.md)
- [ReportPeriod](docs/ReportPeriod.md)
- [Reward](docs/Reward.md)
- [RewardRedeemConstraint](docs/RewardRedeemConstraint.md)
- [RewardsPaginatedResponse](docs/RewardsPaginatedResponse.md)
- [RewardsPaginatedResponseFacet](docs/RewardsPaginatedResponseFacet.md)
- [SocialTariffValidation](docs/SocialTariffValidation.md)
- [SocialTariffValidationPerson](docs/SocialTariffValidationPerson.md)
- [SocialTariffValidationTokenRequest](docs/SocialTariffValidationTokenRequest.md)
- [SocialTariffValidationTokenResponse](docs/SocialTariffValidationTokenResponse.md)
- [Tariff](docs/Tariff.md)
- [TariffAvailibility](docs/TariffAvailibility.md)
- [TariffsResponse](docs/TariffsResponse.md)
- [TariffsResponseEndUserMessage](docs/TariffsResponseEndUserMessage.md)
- [TicketSale](docs/TicketSale.md)
- [TicketSalesPaginatedResponse](docs/TicketSalesPaginatedResponse.md)
- [Transaction](docs/Transaction.md)
- [TransactionsPaginatedCollection](docs/TransactionsPaginatedCollection.md)

### Authorization


Authentication schemes defined for the API:
<a id="CLIENT_IDENTIFICATION"></a>
#### CLIENT_IDENTIFICATION


- **Type**: API key
- **API key parameter name**: `x-client-id`
- **Location**: HTTP header
<a id="CUSTOM_TOKEN"></a>
#### CUSTOM_TOKEN


- **Type**: API key
- **API key parameter name**: `x-custom-token`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `4.0`
- Package version: `1.0.0`
- Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://docs.publiq.be](https://docs.publiq.be)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
