(function () {
  "use strict";

  window.NINZ_BUSINESS_REGISTRATION = {
    version: "1.0",
    public_name: "NINZ Business Registration Navigator",
    verification_interval_days: 90,
    last_verified: "2026-08-28",
    next_scheduled_review: "2026-11-28",
    verification_status: "current",
    states: [
      { state: "Alabama", state_code: "AL", slug: "alabama", publication_status: "coming_soon", public_url: "" },
      { state: "Alaska", state_code: "AK", slug: "alaska", publication_status: "coming_soon", public_url: "" },
      { state: "Arizona", state_code: "AZ", slug: "arizona", publication_status: "coming_soon", public_url: "" },
      { state: "Arkansas", state_code: "AR", slug: "arkansas", publication_status: "coming_soon", public_url: "" },
      { state: "California", state_code: "CA", slug: "california", publication_status: "coming_soon", public_url: "" },
      { state: "Colorado", state_code: "CO", slug: "colorado", publication_status: "coming_soon", public_url: "" },
      { state: "Connecticut", state_code: "CT", slug: "connecticut", publication_status: "coming_soon", public_url: "" },
      { state: "Delaware", state_code: "DE", slug: "delaware", publication_status: "coming_soon", public_url: "" },
      { state: "Florida", state_code: "FL", slug: "florida", publication_status: "coming_soon", public_url: "" },
      { state: "Georgia", state_code: "GA", slug: "georgia", publication_status: "coming_soon", public_url: "" },
      { state: "Hawaii", state_code: "HI", slug: "hawaii", publication_status: "coming_soon", public_url: "" },
      { state: "Idaho", state_code: "ID", slug: "idaho", publication_status: "coming_soon", public_url: "" },
      { state: "Illinois", state_code: "IL", slug: "illinois", publication_status: "coming_soon", public_url: "" },
      { state: "Indiana", state_code: "IN", slug: "indiana", publication_status: "coming_soon", public_url: "" },
      { state: "Iowa", state_code: "IA", slug: "iowa", publication_status: "coming_soon", public_url: "" },
      { state: "Kansas", state_code: "KS", slug: "kansas", publication_status: "coming_soon", public_url: "" },
      { state: "Kentucky", state_code: "KY", slug: "kentucky", publication_status: "coming_soon", public_url: "" },
      { state: "Louisiana", state_code: "LA", slug: "louisiana", publication_status: "coming_soon", public_url: "" },
      { state: "Maine", state_code: "ME", slug: "maine", publication_status: "coming_soon", public_url: "" },
      { state: "Maryland", state_code: "MD", slug: "maryland", publication_status: "coming_soon", public_url: "" },
      { state: "Massachusetts", state_code: "MA", slug: "massachusetts", publication_status: "coming_soon", public_url: "" },
      { state: "Michigan", state_code: "MI", slug: "michigan", publication_status: "coming_soon", public_url: "" },
      { state: "Minnesota", state_code: "MN", slug: "minnesota", publication_status: "coming_soon", public_url: "" },
      { state: "Mississippi", state_code: "MS", slug: "mississippi", publication_status: "coming_soon", public_url: "" },
      { state: "Missouri", state_code: "MO", slug: "missouri", publication_status: "coming_soon", public_url: "" },
      { state: "Montana", state_code: "MT", slug: "montana", publication_status: "coming_soon", public_url: "" },
      { state: "Nebraska", state_code: "NE", slug: "nebraska", publication_status: "coming_soon", public_url: "" },
      { state: "Nevada", state_code: "NV", slug: "nevada", publication_status: "coming_soon", public_url: "" },
      { state: "New Hampshire", state_code: "NH", slug: "new-hampshire", publication_status: "coming_soon", public_url: "" },
      { state: "New Jersey", state_code: "NJ", slug: "new-jersey", publication_status: "coming_soon", public_url: "" },
      { state: "New Mexico", state_code: "NM", slug: "new-mexico", publication_status: "coming_soon", public_url: "" },
      { state: "New York", state_code: "NY", slug: "new-york", publication_status: "coming_soon", public_url: "" },
      { state: "North Carolina", state_code: "NC", slug: "north-carolina", publication_status: "coming_soon", public_url: "" },
      { state: "North Dakota", state_code: "ND", slug: "north-dakota", publication_status: "coming_soon", public_url: "" },
      { state: "Ohio", state_code: "OH", slug: "ohio", publication_status: "coming_soon", public_url: "" },
      {
        state: "Oklahoma",
        state_code: "OK",
        slug: "oklahoma",
        publication_status: "published",
        public_url: "/business-registration/oklahoma/",
        filing_authority: {
          name: "Oklahoma Secretary of State",
          url: "https://www.sos.ok.gov/",
          source_id: "OK-SOS-001"
        },
        official_business_portal: {
          name: "Oklahoma Business Hub",
          url: "https://oklahoma.gov/business/launch/register-your-business.html",
          source_id: "OK-PORTAL-001"
        },
        name_search: {
          name: "Oklahoma Secretary of State Name Availability Search",
          url: "https://www.sos.ok.gov/corp/corpNameAvailability.aspx",
          source_id: "OK-SOS-002"
        },
        state_registration: {
          name: "Oklahoma Secretary of State Business Filing Department",
          url: "https://www.sos.ok.gov/corp/filing.aspx",
          forms_url: "https://www.sos.ok.gov/business/forms.aspx",
          source_id: "OK-SOS-003"
        },
        tax_authority: {
          name: "Oklahoma Tax Commission",
          url: "https://oklahoma.gov/tax/businesses.html",
          source_id: "OK-OTC-001"
        },
        tax_registration: {
          name: "Oklahoma Taxpayer Access Point",
          url: "https://oktap.tax.ok.gov/OkTAP/Web/_/",
          start_url: "https://oklahoma.gov/tax/businesses/new-business-center.html",
          source_id: "OK-OTC-002"
        },
        licenses_permits: {
          name: "Oklahoma Licenses and Permits",
          url: "https://oklahoma.gov/business/operate/licenses-and-permits.html",
          agency_directory_url: "https://oklahoma.gov/stateagency.html",
          source_id: "OK-PORTAL-002"
        },
        employer_registration: {
          name: "Oklahoma Filings for Businesses with Employees",
          url: "https://oklahoma.gov/business/launch/filings-for-businesses-with-employees.html",
          source_id: "OK-EMP-001"
        },
        unemployment_insurance: {
          name: "Oklahoma Employment Security Commission Employer Tax",
          url: "https://oklahoma.gov/oesc/employers/tax.html",
          source_id: "OK-OESC-001"
        },
        workers_compensation: {
          name: "Oklahoma Workers' Compensation Commission",
          url: "https://www.wcc.ok.gov/",
          source_id: "OK-WCC-001"
        },
        ongoing_reporting: {
          name: "Oklahoma Secretary of State Business Forms and Filing Information",
          url: "https://www.sos.ok.gov/business/forms.aspx",
          source_id: "OK-SOS-004"
        },
        official_sources: [
          { source_id: "OK-SOS-001", authority: "Oklahoma Secretary of State", title: "Secretary of State", url: "https://www.sos.ok.gov/", last_checked: "2026-08-28" },
          { source_id: "OK-PORTAL-001", authority: "State of Oklahoma", title: "Register Your Business", url: "https://oklahoma.gov/business/launch/register-your-business.html", last_checked: "2026-08-28" },
          { source_id: "OK-PORTAL-003", authority: "State of Oklahoma", title: "Legal Structure", url: "https://oklahoma.gov/business/plan/legal-structure.html", last_checked: "2026-08-28" },
          { source_id: "OK-PORTAL-004", authority: "State of Oklahoma", title: "Out-of-State Requirements", url: "https://oklahoma.gov/business/operate/out-of-state-requirements.html", last_checked: "2026-08-28" },
          { source_id: "OK-PORTAL-005", authority: "State of Oklahoma", title: "Find an Agency", url: "https://oklahoma.gov/stateagency.html", last_checked: "2026-08-28" },
          { source_id: "OK-SOS-002", authority: "Oklahoma Secretary of State", title: "Name Availability Search", url: "https://www.sos.ok.gov/corp/corpNameAvailability.aspx", last_checked: "2026-08-28" },
          { source_id: "OK-SOS-003", authority: "Oklahoma Secretary of State", title: "Business Filing Department", url: "https://www.sos.ok.gov/corp/filing.aspx", last_checked: "2026-08-28" },
          { source_id: "OK-SOS-004", authority: "Oklahoma Secretary of State", title: "Business Forms", url: "https://www.sos.ok.gov/business/forms.aspx", last_checked: "2026-08-28" },
          { source_id: "OK-SOS-005", authority: "Oklahoma Secretary of State", title: "Registered Business Search", url: "https://www.sos.ok.gov/corp/corpInquiryFind.aspx", last_checked: "2026-08-28" },
          { source_id: "OK-PORTAL-002", authority: "State of Oklahoma", title: "Licenses and Permits", url: "https://oklahoma.gov/business/operate/licenses-and-permits.html", last_checked: "2026-08-28" },
          { source_id: "OK-OTC-001", authority: "Oklahoma Tax Commission", title: "Business Taxes", url: "https://oklahoma.gov/tax/businesses.html", last_checked: "2026-08-28" },
          { source_id: "OK-OTC-002", authority: "Oklahoma Tax Commission", title: "New Business Center", url: "https://oklahoma.gov/tax/businesses/new-business-center.html", last_checked: "2026-08-28" },
          { source_id: "OK-OTC-003", authority: "Oklahoma Tax Commission", title: "Oklahoma Taxpayer Access Point", url: "https://oktap.tax.ok.gov/OkTAP/Web/_/", last_checked: "2026-08-28" },
          { source_id: "OK-OTC-004", authority: "Oklahoma Tax Commission", title: "Franchise Tax Elimination Announcement", url: "https://oklahoma.gov/tax/newsroom/2023/07-26-23.html", last_checked: "2026-08-28" },
          { source_id: "OK-EMP-001", authority: "State of Oklahoma", title: "Filings for Businesses with Employees", url: "https://oklahoma.gov/business/launch/filings-for-businesses-with-employees.html", last_checked: "2026-08-28" },
          { source_id: "OK-OESC-001", authority: "Oklahoma Employment Security Commission", title: "Employer Tax", url: "https://oklahoma.gov/oesc/employers/tax.html", last_checked: "2026-08-28" },
          { source_id: "OK-OESC-002", authority: "Oklahoma Employment Security Commission", title: "New Hire Reporting", url: "https://oklahoma.gov/oesc/employers/new-hire-reporting.html", last_checked: "2026-08-28" },
          { source_id: "OK-WCC-001", authority: "Oklahoma Workers' Compensation Commission", title: "Workers' Compensation Commission", url: "https://www.wcc.ok.gov/", last_checked: "2026-08-28" },
          { source_id: "IRS-EIN-001", authority: "Internal Revenue Service", title: "Employer Identification Number", url: "https://www.irs.gov/businesses/employer-identification-number", last_checked: "2026-08-28" },
          { source_id: "IRS-EIN-002", authority: "Internal Revenue Service", title: "Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number", last_checked: "2026-08-28" }
        ],
        last_verified: "2026-08-28",
        next_scheduled_review: "2026-11-28",
        verification_status: "current"
      },
      { state: "Oregon", state_code: "OR", slug: "oregon", publication_status: "coming_soon", public_url: "" },
      { state: "Pennsylvania", state_code: "PA", slug: "pennsylvania", publication_status: "coming_soon", public_url: "" },
      { state: "Rhode Island", state_code: "RI", slug: "rhode-island", publication_status: "coming_soon", public_url: "" },
      { state: "South Carolina", state_code: "SC", slug: "south-carolina", publication_status: "coming_soon", public_url: "" },
      { state: "South Dakota", state_code: "SD", slug: "south-dakota", publication_status: "coming_soon", public_url: "" },
      { state: "Tennessee", state_code: "TN", slug: "tennessee", publication_status: "coming_soon", public_url: "" },
      { state: "Texas", state_code: "TX", slug: "texas", publication_status: "coming_soon", public_url: "" },
      { state: "Utah", state_code: "UT", slug: "utah", publication_status: "coming_soon", public_url: "" },
      { state: "Vermont", state_code: "VT", slug: "vermont", publication_status: "coming_soon", public_url: "" },
      { state: "Virginia", state_code: "VA", slug: "virginia", publication_status: "coming_soon", public_url: "" },
      { state: "Washington", state_code: "WA", slug: "washington", publication_status: "coming_soon", public_url: "" },
      { state: "West Virginia", state_code: "WV", slug: "west-virginia", publication_status: "coming_soon", public_url: "" },
      { state: "Wisconsin", state_code: "WI", slug: "wisconsin", publication_status: "coming_soon", public_url: "" },
      { state: "Wyoming", state_code: "WY", slug: "wyoming", publication_status: "coming_soon", public_url: "" }
    ]
  };
}());
