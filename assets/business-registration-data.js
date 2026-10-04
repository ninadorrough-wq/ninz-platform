(function () {
  "use strict";

  window.NINZ_BUSINESS_REGISTRATION = {
    version: "1.0",
    public_name: "NINZ Business Registration Navigator",
    verification_interval_days: 90,
    last_verified: "2026-08-28",
    next_scheduled_review: "2026-11-28",
    verification_status: "current",
    federal_modules: {
      ein: {
        "name": "IRS Employer Identification Number (EIN)",
        "authority": "Internal Revenue Service",
        "guidance_url": "https://www.irs.gov/businesses/employer-identification-number",
        "application_url": "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number",
        "last_checked": "2026-10-04",
        "verification_status": "VERIFIED",
        "paragraphs": [
          "Use current IRS guidance to decide whether your business needs an EIN and which application method is available. An EIN is a federal identifier, separate from state formation, licensing and state tax accounts.",
          "The IRS issues EINs free. If forming a legal entity, complete the state formation before applying, as instructed by the IRS. Use the IRS eligibility and responsible-party instructions directly."
        ],
        "official_sources": [
          {
            "source_id": "IRS-EIN-001",
            "authority": "Internal Revenue Service",
            "title": "Employer Identification Number",
            "url": "https://www.irs.gov/businesses/employer-identification-number",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "link_status": "reachable"
          },
          {
            "source_id": "IRS-EIN-002",
            "authority": "Internal Revenue Service",
            "title": "Get an Employer Identification Number",
            "url": "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "link_status": "reachable"
          }
        ],
        "note": "Federal EIN guidance is maintained once. State sequencing instructions do not redefine federal eligibility."
      }
    },
    states: [
      { state: "Alabama", state_code: "AL", slug: "alabama", publication_status: "coming_soon", public_url: "" },
      { state: "Alaska", state_code: "AK", slug: "alaska", publication_status: "coming_soon", public_url: "" },
      { state: "Arizona", state_code: "AZ", slug: "arizona", publication_status: "coming_soon", public_url: "" },
      {
        "state": "Arkansas",
        "state_code": "AR",
        "slug": "arkansas",
        "publication_status": "coming_soon",
        "public_url": "",
        "staging_status": "review_draft_prepared",
        "ein_module": "ein",
        "official_sources": [
          {
            "source_id": "AR-SOS-001",
            "authority": "Arkansas Secretary of State",
            "title": "For New Businesses",
            "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/for-new-business/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-002",
            "authority": "Arkansas Secretary of State",
            "title": "Business Services FAQ",
            "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/frequently-asked-questions-faqs/business-services-faq",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-003",
            "authority": "Arkansas Secretary of State",
            "title": "Franchise Tax / Annual Report Forms",
            "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/franchise-tax-report-forms/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-004",
            "authority": "Arkansas Secretary of State",
            "title": "Partnership Annual Reports",
            "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/franchise-tax/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-005",
            "authority": "Arkansas Secretary of State",
            "title": "Nonprofit / Charitable Entities",
            "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/nonprofit-charitable-entities/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-DFA-001",
            "authority": "Arkansas Department of Finance and Administration",
            "title": "Business Online Services",
            "url": "https://www.dfa.arkansas.gov/online-services/businesses/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-DWS-001",
            "authority": "Arkansas Division of Workforce Services",
            "title": "UI Employer Services",
            "url": "https://dws.arkansas.gov/workforce-services/unemployment/employer-ui-information/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-DWS-002",
            "authority": "Arkansas Division of Workforce Services",
            "title": "Employer UI Contributions",
            "url": "https://dws.arkansas.gov/workforce-services/unemployment/employer-ui-information/employer-ui-contributions/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-WCC-001",
            "authority": "Arkansas Workers Compensation Commission",
            "title": "Basic Facts",
            "url": "https://labor.arkansas.gov/workers-comp/awcc-about-us/basic-facts/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-006",
            "authority": "Arkansas Secretary of State",
            "title": "2026 LLC Franchise Tax Report",
            "url": "https://www.sos.arkansas.gov/uploads/bcs/LLC1_FT_2026.pdf",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "Current 2026 form downloaded and text reviewed.",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-007",
            "authority": "Arkansas Secretary of State",
            "title": "2026 Corporation Franchise Tax Report",
            "url": "https://www.sos.arkansas.gov/uploads/bcs/Corp1_FT_2026.pdf",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "Current 2026 form downloaded and text reviewed.",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-008",
            "authority": "Arkansas Secretary of State",
            "title": "2026 Limited Partnership Annual Report",
            "url": "https://www.sos.arkansas.gov/uploads/bcs/LP_AR_2026_1.pdf",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "Current 2026 form downloaded and text reviewed.",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-009",
            "authority": "Arkansas Secretary of State",
            "title": "2026 LLP Annual Report",
            "url": "https://www.sos.arkansas.gov/uploads/bcs/LLP_Annual-Report-2026.pdf",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "Current 2026 form downloaded and text reviewed.",
            "link_status": "reachable"
          },
          {
            "source_id": "AR-SOS-010",
            "authority": "Arkansas Secretary of State",
            "title": "2026 LLLP Annual Report",
            "url": "https://www.sos.arkansas.gov/uploads/bcs/LLLP_AR_2026.pdf",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "Current 2026 form downloaded and text reviewed.",
            "link_status": "reachable"
          }
        ],
        "last_verified": "2026-10-04",
        "next_scheduled_review": "2027-01-02",
        "verification_status": "research_required",
        "verification_scope": "Supported claims reviewed individually; unresolved items and blocked link checks prevent activation.",
        "unresolved_items": [
          "Verify the statewide general-business-license conclusion explicitly from a current official government source; do not infer it from the licensing directory.",
          "Verify workers-compensation statutory exclusions and important contractor/owner exceptions from current official law or Commission guidance.",
          "Confirm LLC and unincorporated-business fictitious-name obligations and any county filing; the corporation county/Pulaski distinction is verified.",
          "Complete desktop/mobile browser, keyboard and visual accessibility review before activation; the local browser runtime is unavailable in this session."
        ],
        "filing_authority": {
          "name": "Business Services FAQ",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/frequently-asked-questions-faqs/business-services-faq",
          "source_id": "AR-SOS-002",
          "requirements": [
            {
              "text": "SOS handles Arkansas corporation, LLC and specified partnership filings. Foreign entities transacting business may need authorization; statutory exclusions for activities that do not constitute transacting business must be checked.",
              "source_ids": [
                "AR-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "official_business_portal": {
          "name": "For New Businesses",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/for-new-business/",
          "source_id": "AR-SOS-001",
          "requirements": [
            {
              "text": "The SOS new-business page provides official business search and entity-filing starting points.",
              "source_ids": [
                "AR-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "name_search": {
          "name": "For New Businesses",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/for-new-business/",
          "source_id": "AR-SOS-001",
          "requirements": [
            {
              "text": "Use the SOS Business Entity Search linked from the new-business page before filing. Review current naming and reservation instructions for your entity.",
              "source_ids": [
                "AR-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "state_registration": {
          "name": "Business Services FAQ",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/frequently-asked-questions-faqs/business-services-faq",
          "source_id": "AR-SOS-002",
          "requirements": [
            {
              "text": "Not every business requires incorporation. Select the correct entity formation or foreign-qualification filing rather than treating every business as a corporation.",
              "source_ids": [
                "AR-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_authority": {
          "name": "Business Online Services",
          "url": "https://www.dfa.arkansas.gov/online-services/businesses/",
          "source_id": "AR-DFA-001",
          "requirements": [
            {
              "text": "DFA administers Arkansas business-tax services, including sales/use, withholding and income-tax accounts when applicable.",
              "source_ids": [
                "AR-DFA-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_registration": {
          "name": "Business Online Services",
          "url": "https://www.dfa.arkansas.gov/online-services/businesses/",
          "source_id": "AR-DFA-001",
          "requirements": [
            {
              "text": "Use Register for a Tax Account through Arkansas Taxpayer Access Point (ATAP). Select the tax accounts required for your activity and employment; an ATAP login alone does not establish the correct tax registration.",
              "source_ids": [
                "AR-DFA-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "licenses_permits": {
          "name": "Business Services FAQ",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/frequently-asked-questions-faqs/business-services-faq",
          "source_id": "AR-SOS-002",
          "requirements": [
            {
              "text": "Check state licensing boards for your activity and the city or county for local business licenses and permits. Formation and tax registration do not establish that all operating approvals are complete.",
              "source_ids": [
                "AR-SOS-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "An explicit statewide general-business-license conclusion has not been verified from current official evidence. Research is required before activation.",
              "source_ids": [
                "AR-SOS-002"
              ],
              "status": "unresolved/research-required"
            }
          ],
          "statewide_general_license": null,
          "statewide_general_license_status": "unresolved/research-required"
        },
        "local_requirements_note": "Ask each city or county where the business operates about business licensing, zoning, occupancy, home-business and activity-specific permits. Check the responsible state licensing agency as well.",
        "employer_registration": {
          "name": "UI Employer Services",
          "url": "https://dws.arkansas.gov/workforce-services/unemployment/employer-ui-information/",
          "source_id": "AR-DWS-001",
          "requirements": [
            {
              "text": "Use the UI Employer Services account and registration resources. Review new-hire reporting and other employer obligations through the responsible agencies; withholding tax is separately administered by DFA.",
              "source_ids": [
                "AR-DWS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "unemployment_insurance": {
          "name": "Employer UI Contributions",
          "url": "https://dws.arkansas.gov/workforce-services/unemployment/employer-ui-information/employer-ui-contributions/",
          "source_id": "AR-DWS-002",
          "requirements": [
            {
              "text": "The general employer definition includes having at least one individual employed for part of ten or more days in a calendar year; the days need not be consecutive. Do not substitute another state's 20-week test.",
              "source_ids": [
                "AR-DWS-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Domestic service has a $1,000 quarterly cash-payment threshold; agricultural coverage depends on $20,000 in a quarter or ten workers in twenty weeks. Family services in sole proprietorships, churches and other listed services may be exempt. Verify the category before registering.",
              "source_ids": [
                "AR-DWS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "workers_compensation": {
          "name": "Basic Facts",
          "url": "https://labor.arkansas.gov/workers-comp/awcc-about-us/basic-facts/",
          "source_id": "AR-WCC-001",
          "requirements": [
            {
              "text": "Most employers with three or more employees must have workers compensation coverage. The Commission expressly warns that exceptions can require coverage with fewer than three; do not presume a small employer is exempt.",
              "source_ids": [
                "AR-WCC-001"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Coverage uses an insurance policy or approved self-insurance. Confirm exemptions, owner treatment and contractor/subcontractor obligations directly with the Commission before relying on an exception.",
              "source_ids": [
                "AR-WCC-001"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Detailed statutory exclusions and special contractor/owner cases remain research-required; the Basic Facts page does not establish an exhaustive exception list.",
              "source_ids": [
                "AR-WCC-001"
              ],
              "status": "unresolved/research-required"
            }
          ]
        },
        "ongoing_reporting": {
          "name": "Franchise Tax / Annual Report Forms",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/franchise-tax-report-forms/",
          "source_id": "AR-SOS-003",
          "requirements": [
            {
              "text": "Corporations, LLCs and other covered entities use the annual franchise-tax framework. Entity forms and amounts differ; this must not be presented as the same filing for all structures.",
              "source_ids": [
                "AR-SOS-003"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "The current 2026 LP, LLP and LLLP annual-report forms specify August 1. Nonprofit corporations also file an annual report by August 1, separate from franchise-tax reporting.",
              "source_ids": [
                "AR-SOS-005",
                "AR-SOS-008",
                "AR-SOS-009",
                "AR-SOS-010"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "The current 2026 corporation and LLC franchise-tax reports are due on or before May 1. The LLC form specifies $150; corporation calculations vary by entity. Calendar the applicable entity filing and recheck the new form each report year.",
              "source_ids": [
                "AR-SOS-006",
                "AR-SOS-007"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "registered_agent": {
          "name": "Business Services FAQ",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/frequently-asked-questions-faqs/business-services-faq",
          "source_id": "AR-SOS-002",
          "requirements": [
            {
              "text": "For corporations, the registered agent must be located at a street address in Arkansas; a PO box or mail drop is not the registered-agent address. Review the corresponding instructions for other entity types.",
              "source_ids": [
                "AR-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "trade_name": {
          "name": "For New Businesses",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/for-new-business/",
          "source_id": "AR-SOS-001",
          "requirements": [
            {
              "text": "Use SOS instructions to locate fictitious-name forms for the applicable entity. Businesses not required to file with SOS may have county circuit-clerk filings.",
              "source_ids": [
                "AR-SOS-001",
                "AR-SOS-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "The SOS FAQ states that a corporation using a fictitious name must first file with SOS. A domestic corporation must also file with the county clerk where its registered office is located, except when that office is in Pulaski County. Do not extend this corporation rule to other entity types without their instructions.",
              "source_ids": [
                "AR-SOS-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Verify the entity-specific fictitious-name filing and any county requirement from the current instructions before activation.",
              "source_ids": [
                "AR-SOS-002"
              ],
              "status": "unresolved/research-required"
            }
          ]
        }
      },
      { state: "California", state_code: "CA", slug: "california", publication_status: "coming_soon", public_url: "" },
      {
        "state": "Colorado",
        "state_code": "CO",
        "slug": "colorado",
        "publication_status": "coming_soon",
        "public_url": "",
        "staging_status": "review_draft_prepared",
        "ein_module": "ein",
        "official_sources": [
          {
            "source_id": "CO-SOS-001",
            "authority": "Colorado Secretary of State",
            "title": "Business Forms List",
            "url": "https://www.coloradosos.gov/pubs/business/forms_main.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "CO-SOS-002",
            "authority": "Colorado Secretary of State",
            "title": "Names FAQs",
            "url": "https://www.coloradosos.gov/pubs/business/FAQs/entityNames.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "CO-SOS-003",
            "authority": "Colorado Secretary of State",
            "title": "Periodic Reports FAQs",
            "url": "https://www.sos.state.co.us/pubs/business/FAQs/reports.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "CO-SOS-004",
            "authority": "Colorado Secretary of State",
            "title": "Registered Agent FAQs",
            "url": "https://www.coloradosos.gov/pubs/business/FAQs/regAgent.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "CO-DOR-001",
            "authority": "Colorado Department of Revenue",
            "title": "Sales Tax License",
            "url": "https://tax.colorado.gov/sales-tax-license",
            "last_checked": "2026-10-04",
            "evidence_method": "unresolved",
            "evidence_note": "Direct retrieval blocked. Current production content must be checked; development mirrors were excluded as authority.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "CO-DOR-002",
            "authority": "Colorado Department of Revenue",
            "title": "Sales Tax Guide",
            "url": "https://tax.colorado.gov/sales-tax-guide",
            "last_checked": "2026-10-04",
            "evidence_method": "unresolved",
            "evidence_note": "Production page requires direct current review; development mirror excluded.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "CO-PORTAL-001",
            "authority": "State of Colorado",
            "title": "MyBizColorado",
            "url": "https://mybiz.colorado.gov/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "manual_review_required"
          },
          {
            "source_id": "CO-DORA-001",
            "authority": "Colorado Department of Regulatory Agencies",
            "title": "Division of Professions and Occupations",
            "url": "https://dpo.colorado.gov/",
            "last_checked": "2026-10-04",
            "evidence_method": "unresolved",
            "evidence_note": "Verify current licensing scope and production destination directly.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "CO-CDLE-001",
            "authority": "Colorado Department of Labor and Employment",
            "title": "Starting a Business",
            "url": "https://cdle.colorado.gov/employers/starting-a-business",
            "last_checked": "2026-10-04",
            "evidence_method": "unresolved",
            "evidence_note": "Production retrieval blocked; development mirror excluded as authority.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "CO-DWC-001",
            "authority": "Colorado Department of Labor and Employment",
            "title": "Workers Compensation Insurance Requirements",
            "url": "https://cdle.colorado.gov/dwc/employers/insurance-coverage",
            "last_checked": "2026-10-04",
            "evidence_method": "unresolved",
            "evidence_note": "Production retrieval blocked; direct check of current rule and exceptions required.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "CO-DWC-002",
            "authority": "Colorado Department of Labor and Employment",
            "title": "Workers Compensation Coverage Rejection Search",
            "url": "https://wc1.cdle.state.co.us/wccompliance/",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Official indexed coverage-rejection categories reviewed.",
            "link_status": "reachable"
          },
          {
            "source_id": "CO-FAMLI-001",
            "authority": "Colorado Department of Labor and Employment",
            "title": "FAMLI Business Brief \u2014 January 2026",
            "url": "https://content.govdelivery.com/accounts/CODLE/bulletins/4044121",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Official CDLE-issued bulletin hosted on its government communications service; not a third-party interpretation. Registration applicability and exceptions still require current agency guidance.",
            "link_status": "reachable"
          }
        ],
        "last_verified": "2026-10-04",
        "next_scheduled_review": "2027-01-02",
        "verification_status": "research_required",
        "verification_scope": "Supported claims reviewed individually; unresolved items and blocked link checks prevent activation.",
        "unresolved_items": [
          "Verify the statewide general-business-license conclusion explicitly from a current official government source; do not infer it from the licensing directory.",
          "Directly verify current production DOR tax registration and home-rule local-tax guidance; development mirrors are not authority.",
          "Directly verify CDLE UI registration, liability thresholds, workers compensation exclusions and the one-employee rule.",
          "Verify FAMLI and new-hire employer destinations and obligations from current responsible-agency guidance.",
          "Verify the DORA licensing destination and the current MyBizColorado agency registration paths.",
          "Complete desktop/mobile browser, keyboard and visual accessibility review before activation; the local browser runtime is unavailable in this session."
        ],
        "filing_authority": {
          "name": "Business Forms List",
          "url": "https://www.coloradosos.gov/pubs/business/forms_main.html",
          "source_id": "CO-SOS-001",
          "requirements": [
            {
              "text": "Colorado SOS provides formation filings for LLCs, corporations and other covered entities, plus forms for foreign authority.",
              "source_ids": [
                "CO-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "official_business_portal": {
          "name": "MyBizColorado",
          "url": "https://mybiz.colorado.gov/",
          "source_id": "CO-PORTAL-001",
          "requirements": [
            {
              "text": "MyBizColorado is the official registration portal. Confirm the current agency paths and which registrations it supports for the business before using it.",
              "source_ids": [
                "CO-PORTAL-001"
              ],
              "status": "unresolved/research-required"
            }
          ]
        },
        "name_search": {
          "name": "Names FAQs",
          "url": "https://www.coloradosos.gov/pubs/business/FAQs/entityNames.html",
          "source_id": "CO-SOS-002",
          "requirements": [
            {
              "text": "Name Availability checks a particular entity name; the Business Database Search shows similar records. Trade names and trademarks are excluded from the availability check; these searches answer different questions.",
              "source_ids": [
                "CO-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "state_registration": {
          "name": "Business Forms List",
          "url": "https://www.coloradosos.gov/pubs/business/forms_main.html",
          "source_id": "CO-SOS-001",
          "requirements": [
            {
              "text": "Use entity-specific articles or other formation documents, or the appropriate foreign-authority filing. Separate trade-name forms exist for individuals, reporting entities and non-reporting entities.",
              "source_ids": [
                "CO-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_authority": {
          "name": "Sales Tax License",
          "url": "https://tax.colorado.gov/sales-tax-license",
          "source_id": "CO-DOR-001",
          "requirements": [
            {
              "text": "Colorado DOR administers state business taxes. Confirm sales/use and wage-withholding accounts appropriate to the business.",
              "source_ids": [
                "CO-DOR-001"
              ],
              "status": "unresolved/research-required"
            }
          ]
        },
        "tax_registration": {
          "name": "Sales Tax License",
          "url": "https://tax.colorado.gov/sales-tax-license",
          "source_id": "CO-DOR-001",
          "requirements": [
            {
              "text": "Confirm current Colorado sales-tax-license and wage-withholding registration instructions, including MyBizColorado or CR 0100 when applicable.",
              "source_ids": [
                "CO-DOR-001"
              ],
              "status": "unresolved/research-required"
            },
            {
              "text": "Verify home-rule city sales-tax licensing and collection independently; a state-administered account must not be described as satisfying all local tax registrations.",
              "source_ids": [
                "CO-DOR-002"
              ],
              "status": "unresolved/research-required"
            }
          ]
        },
        "licenses_permits": {
          "name": "Division of Professions and Occupations",
          "url": "https://dpo.colorado.gov/",
          "source_id": "CO-DORA-001",
          "requirements": [
            {
              "text": "Check state licensing boards for your activity and the city or county for local business licenses and permits. Formation and tax registration do not establish that all operating approvals are complete.",
              "source_ids": [
                "CO-DORA-001"
              ],
              "status": "unresolved/research-required"
            },
            {
              "text": "An explicit statewide general-business-license conclusion has not been verified from current official evidence. Research is required before activation.",
              "source_ids": [
                "CO-DORA-001"
              ],
              "status": "unresolved/research-required"
            }
          ],
          "statewide_general_license": null,
          "statewide_general_license_status": "unresolved/research-required"
        },
        "local_requirements_note": "Ask each city or county where the business operates about business licensing, zoning, occupancy, home-business and activity-specific permits. Check the responsible state licensing agency as well.",
        "employer_registration": {
          "name": "Starting a Business",
          "url": "https://cdle.colorado.gov/employers/starting-a-business",
          "source_id": "CO-CDLE-001",
          "requirements": [
            {
              "text": "Confirm CDLE's current UI employer-registration path and category instructions before hiring. Also verify withholding, new-hire reporting, FAMLI registration and other applicable employer programs independently.",
              "source_ids": [
                "CO-CDLE-001"
              ],
              "status": "unresolved/research-required"
            },
            {
              "text": "The official January 2026 FAMLI bulletin directs employers with Colorado employees, including employers with approved private plans, to update annual employee headcount in My FAMLI+ Employer and post/distribute the required program notice. FAMLI is a separate employer program; verify registration applicability and private-plan/local-government rules with FAMLI before activation.",
              "source_ids": [
                "CO-FAMLI-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "unemployment_insurance": {
          "name": "Starting a Business",
          "url": "https://cdle.colorado.gov/employers/starting-a-business",
          "source_id": "CO-CDLE-001",
          "requirements": [
            {
              "text": "Verify UI liability thresholds and exceptions directly with CDLE for general business, household, agricultural, nonprofit and governmental employers. Do not infer these tests from a one-employee workers compensation rule.",
              "source_ids": [
                "CO-CDLE-001"
              ],
              "status": "unresolved/research-required"
            }
          ]
        },
        "workers_compensation": {
          "name": "Workers Compensation Insurance Requirements",
          "url": "https://cdle.colorado.gov/dwc/employers/insurance-coverage",
          "source_id": "CO-DWC-001",
          "requirements": [
            {
              "text": "The staged general rule is coverage for employers with one or more employees, full-time or part-time, with limited exceptions. Current production-page evidence and the complete exclusions still require direct verification before activation.",
              "source_ids": [
                "CO-DWC-001"
              ],
              "status": "unresolved/research-required"
            },
            {
              "text": "The official rejection search covers construction sole proprietors/partners and qualifying corporate officers or LLC members with at least 10% ownership and participation in management or daily operations. Eligibility and a valid rejection must be confirmed; an owner election does not exempt other employees.",
              "source_ids": [
                "CO-DWC-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "ongoing_reporting": {
          "name": "Periodic Reports FAQs",
          "url": "https://www.sos.state.co.us/pubs/business/FAQs/reports.html",
          "source_id": "CO-SOS-003",
          "requirements": [
            {
              "text": "Reporting entities, including LLCs, corporations, nonprofits and covered foreign entities, file a Periodic Report every year. Confirm whether a partnership is a reporting entity rather than applying this universally.",
              "source_ids": [
                "CO-SOS-003"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "The record's summary identifies its report month. Filing is allowed two months before or two months after that month without penalty. Trade-name renewal is a separate process with different entity treatment.",
              "source_ids": [
                "CO-SOS-003"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "registered_agent": {
          "name": "Registered Agent FAQs",
          "url": "https://www.coloradosos.gov/pubs/business/FAQs/regAgent.html",
          "source_id": "CO-SOS-004",
          "requirements": [
            {
              "text": "Use the current registered-agent eligibility, Colorado registered-office and identity/consent instructions. Do not rely on an older template or assume every proposed person is eligible.",
              "source_ids": [
                "CO-SOS-004"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "trade_name": {
          "name": "Business Forms List",
          "url": "https://www.coloradosos.gov/pubs/business/forms_main.html",
          "source_id": "CO-SOS-001",
          "requirements": [
            {
              "text": "Select the trade-name statement appropriate to the owner: individual, reporting entity, non-reporting entity or other category. The form list also provides separate renewal instructions; confirm which renewal rule applies.",
              "source_ids": [
                "CO-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        }
      },
      { state: "Connecticut", state_code: "CT", slug: "connecticut", publication_status: "coming_soon", public_url: "" },
      { state: "Delaware", state_code: "DE", slug: "delaware", publication_status: "coming_soon", public_url: "" },
      { state: "Florida", state_code: "FL", slug: "florida", publication_status: "coming_soon", public_url: "" },
      { state: "Georgia", state_code: "GA", slug: "georgia", publication_status: "coming_soon", public_url: "" },
      { state: "Hawaii", state_code: "HI", slug: "hawaii", publication_status: "coming_soon", public_url: "" },
      { state: "Idaho", state_code: "ID", slug: "idaho", publication_status: "coming_soon", public_url: "" },
      { state: "Illinois", state_code: "IL", slug: "illinois", publication_status: "coming_soon", public_url: "" },
      { state: "Indiana", state_code: "IN", slug: "indiana", publication_status: "coming_soon", public_url: "" },
      { state: "Iowa", state_code: "IA", slug: "iowa", publication_status: "coming_soon", public_url: "" },
      {
        "state": "Kansas",
        "state_code": "KS",
        "slug": "kansas",
        "publication_status": "coming_soon",
        "public_url": "",
        "staging_status": "review_draft_prepared",
        "ein_module": "ein",
        "official_sources": [
          {
            "source_id": "KS-SOS-001",
            "authority": "Kansas Secretary of State",
            "title": "Register a Business",
            "url": "https://www.sos.ks.gov/businesses/register-a-business.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "KS-SOS-002",
            "authority": "Kansas Secretary of State",
            "title": "Business Name Availability",
            "url": "https://www.sos.ks.gov/eforms/BusinessEntity/NameAvailability.aspx",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "KS-SOS-003",
            "authority": "Kansas Secretary of State",
            "title": "Information Reports",
            "url": "https://sos.ks.gov/businesses/information-reports.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "KS-PORTAL-001",
            "authority": "State of Kansas",
            "title": "Business Center One Stop",
            "url": "https://ksbiz.kansas.gov/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "KS-PORTAL-002",
            "authority": "State of Kansas",
            "title": "Obtain Business Licenses and Permits",
            "url": "https://ksbiz.kansas.gov/start/obtain-licenses-and-permits/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "KS-PORTAL-003",
            "authority": "State of Kansas",
            "title": "Plan to Register a Business",
            "url": "https://ksbiz.kansas.gov/plan/register-a-business/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "KS-DOR-001",
            "authority": "Kansas Department of Revenue",
            "title": "Business Tax Registration",
            "url": "https://www.ksrevenue.gov/busregistration.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "KS-DOR-002",
            "authority": "Kansas Department of Revenue",
            "title": "KS-1216 Business Tax Application",
            "url": "https://www.ksrevenue.gov/pub1216.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "KS-DOL-001",
            "authority": "Kansas Department of Labor",
            "title": "Unemployment Tax",
            "url": "https://www.dol.ks.gov/employers/employer-services/unemployment-tax",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Direct retrieval blocked; employer liability and registration details require a direct current check.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "KS-DOL-002",
            "authority": "Kansas Department of Labor",
            "title": "Employer Forms",
            "url": "https://www.dol.ks.gov/employers/employer-services/forms",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Official indexed instructions identify the employer Status Report and new-hire form; direct retrieval blocked.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "KS-DOL-003",
            "authority": "Kansas Department of Labor",
            "title": "Workers Compensation Division",
            "url": "https://www.dol.ks.gov/workers-compensation/overview",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Current official indexed content reviewed; direct retrieval blocked.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "KS-LAW-001",
            "authority": "Kansas Legislature",
            "title": "K.S.A. 44-703 \u2014 Employer and employment definitions",
            "url": "https://www.kslegislature.gov/b2025_26/laws/044_000_0000_chapter/044_007_0000_article/044_007_0003_section/044_007_0003_k/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "Current official statute, subsection (h), reviewed; agency registration instructions remain independently unresolved.",
            "link_status": "reachable"
          }
        ],
        "last_verified": "2026-10-04",
        "next_scheduled_review": "2027-01-02",
        "verification_status": "research_required",
        "verification_scope": "Supported claims reviewed individually; unresolved items and blocked link checks prevent activation.",
        "unresolved_items": [
          "Verify the statewide general-business-license conclusion explicitly from a current official government source; do not infer it from the licensing directory.",
          "Directly verify current KDOL account-registration instructions and category guidance; liability thresholds are supported by K.S.A. 44-703, not inferred from another state.",
          "Recheck blocked KDOL workers-compensation and employer-form links before activation.",
          "Resolve the full trade/assumed-name treatment from an explicit official source.",
          "Complete desktop/mobile browser, keyboard and visual accessibility review before activation; the local browser runtime is unavailable in this session."
        ],
        "filing_authority": {
          "name": "Register a Business",
          "url": "https://www.sos.ks.gov/businesses/register-a-business.html",
          "source_id": "KS-SOS-001",
          "requirements": [
            {
              "text": "Kansas SOS registers corporations, LLCs, LLPs, LPs and other covered filing entities; applicable foreign entities must register as well.",
              "source_ids": [
                "KS-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "official_business_portal": {
          "name": "Business Center One Stop",
          "url": "https://ksbiz.kansas.gov/",
          "source_id": "KS-PORTAL-001",
          "requirements": [
            {
              "text": "Kansas Business One Stop links state formation, taxes, licenses and employer resources.",
              "source_ids": [
                "KS-PORTAL-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "name_search": {
          "name": "Business Name Availability",
          "url": "https://www.sos.ks.gov/eforms/BusinessEntity/NameAvailability.aspx",
          "source_id": "KS-SOS-002",
          "requirements": [
            {
              "text": "Use the official Name Availability tool and business search before submitting the entity filing. Confirm the chosen name under current SOS instructions.",
              "source_ids": [
                "KS-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "state_registration": {
          "name": "Register a Business",
          "url": "https://www.sos.ks.gov/businesses/register-a-business.html",
          "source_id": "KS-SOS-001",
          "requirements": [
            {
              "text": "Sole proprietors do not register with Kansas SOS. General partnerships are not required to register, but may file a Statement of Partnership Authority. Select the correct domestic or foreign filing for entities required to register.",
              "source_ids": [
                "KS-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_authority": {
          "name": "Business Tax Registration",
          "url": "https://www.ksrevenue.gov/busregistration.html",
          "source_id": "KS-DOR-001",
          "requirements": [
            {
              "text": "KDOR administers state business tax registration separately from SOS formation and KDOL unemployment registration.",
              "source_ids": [
                "KS-DOR-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_registration": {
          "name": "KS-1216 Business Tax Application",
          "url": "https://www.ksrevenue.gov/pub1216.html",
          "source_id": "KS-DOR-002",
          "requirements": [
            {
              "text": "Use KDOR's Customer Service Center or CR-16 application for applicable sales/use, withholding and other business-tax accounts. Requirements depend on activity; registration is not a universal professional license.",
              "source_ids": [
                "KS-DOR-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "ein_sequencing": {
          "text": "KDOR instructs applicants who intend to obtain an EIN to get it before completing the Kansas Business Tax Application. This state sequencing instruction does not decide federal EIN eligibility.",
          "source_ids": [
            "KS-DOR-002"
          ],
          "status": "VERIFIED"
        },
        "licenses_permits": {
          "name": "Obtain Business Licenses and Permits",
          "url": "https://ksbiz.kansas.gov/start/obtain-licenses-and-permits/",
          "source_id": "KS-PORTAL-002",
          "requirements": [
            {
              "text": "Check state licensing boards for your activity and the city or county for local business licenses and permits. Formation and tax registration do not establish that all operating approvals are complete.",
              "source_ids": [
                "KS-PORTAL-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "An explicit statewide general-business-license conclusion has not been verified from current official evidence. Research is required before activation.",
              "source_ids": [
                "KS-PORTAL-002"
              ],
              "status": "unresolved/research-required"
            }
          ],
          "statewide_general_license": null,
          "statewide_general_license_status": "unresolved/research-required"
        },
        "local_requirements_note": "Ask each city or county where the business operates about business licensing, zoning, occupancy, home-business and activity-specific permits. Check the responsible state licensing agency as well.",
        "employer_registration": {
          "name": "Employer Forms",
          "url": "https://www.dol.ks.gov/employers/employer-services/forms",
          "source_id": "KS-DOL-002",
          "requirements": [
            {
              "text": "Use KDOL's employer Status Report to obtain a liability determination and review its employer registration instructions. KDOL also provides a new-hire reporting form.",
              "source_ids": [
                "KS-DOL-002"
              ],
              "status": "unresolved/research-required"
            },
            {
              "text": "Register for Kansas wage withholding with KDOR when the applicable payments require it. This is a separate obligation from unemployment insurance.",
              "source_ids": [
                "KS-DOR-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "unemployment_insurance": {
          "name": "Unemployment Tax",
          "url": "https://www.dol.ks.gov/employers/employer-services/unemployment-tax",
          "source_id": "KS-DOL-001",
          "requirements": [
            {
              "text": "Under K.S.A. 44-703(h), the general employer test includes $1,500 or more wages in any quarter of the current or preceding year, or at least one worker for part of a day in each of 20 different weeks in either year. Domestic and agricultural employment use separate tests; voluntary, successor and federal-conformity provisions can also establish liability.",
              "source_ids": [
                "KS-LAW-001"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Separate tests include domestic service with $1,000 or more cash remuneration in a quarter; agricultural labor with $20,000 or more cash remuneration in a quarter or at least 10 workers in each of 20 different weeks; and covered 501(c)(3) employers with four or more workers in each of 20 different weeks. These tests use the current or preceding year. Governmental employment and statutory exclusions require separate review; this list is not exhaustive.",
              "source_ids": [
                "KS-LAW-001"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Verify the current KDOL Status Report, account-registration sequence and category instructions before activation. Statutory liability verification does not establish that the blocked agency registration path works.",
              "source_ids": [
                "KS-DOL-001",
                "KS-DOL-002"
              ],
              "status": "unresolved/research-required"
            }
          ]
        },
        "workers_compensation": {
          "name": "Workers Compensation Division",
          "url": "https://www.dol.ks.gov/workers-compensation/overview",
          "source_id": "KS-DOL-003",
          "requirements": [
            {
              "text": "Non-agricultural employers generally need coverage when gross annual payroll exceeds $20,000. Include wages paid in and outside Kansas in the calculation; corporate payroll includes family wages.",
              "source_ids": [
                "KS-DOL-003"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Certain agriculture, qualifying real-estate agents and other statutory exclusions apply. Proprietors, partners and LLC members differ from ordinary employees. Elections may allow coverage or an eligible owner's exclusion; they do not remove coverage duties for other employees.",
              "source_ids": [
                "KS-DOL-003"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "ongoing_reporting": {
          "name": "Information Reports",
          "url": "https://sos.ks.gov/businesses/information-reports.html",
          "source_id": "KS-SOS-003",
          "requirements": [
            {
              "text": "Information reports are filed every two years, keyed to the entity's odd/even formation year. For-profit businesses are due April 15 and not-for-profit businesses June 15 in the applicable report year.",
              "source_ids": [
                "KS-SOS-003"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Keep resident-agent and registered-office details current; tax, employer and license filings remain separate.",
              "source_ids": [
                "KS-SOS-003"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "registered_agent": {
          "name": "Plan to Register a Business",
          "url": "https://ksbiz.kansas.gov/plan/register-a-business/",
          "source_id": "KS-PORTAL-003",
          "requirements": [
            {
              "text": "Review Kansas resident-agent eligibility and registered-office instructions for the entity. Use a qualified Kansas agent and keep the official address current.",
              "source_ids": [
                "KS-PORTAL-003"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "trade_name": {
          "name": "Register a Business",
          "url": "https://www.sos.ks.gov/businesses/register-a-business.html",
          "source_id": "KS-SOS-001",
          "requirements": [
            {
              "text": "The SOS name-reservation application reserves a future entity name; it does not register an assumed, fictitious, trade or DBA name.",
              "source_ids": [
                "KS-SOS-001"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Verify any activity-specific or local assumed-name requirements before asserting that a DBA filing is unnecessary. No broader absence-of-filing conclusion has been verified.",
              "source_ids": [
                "KS-PORTAL-002"
              ],
              "status": "unresolved/research-required"
            }
          ]
        }
      },
      { state: "Kentucky", state_code: "KY", slug: "kentucky", publication_status: "coming_soon", public_url: "" },
      { state: "Louisiana", state_code: "LA", slug: "louisiana", publication_status: "coming_soon", public_url: "" },
      { state: "Maine", state_code: "ME", slug: "maine", publication_status: "coming_soon", public_url: "" },
      { state: "Maryland", state_code: "MD", slug: "maryland", publication_status: "coming_soon", public_url: "" },
      { state: "Massachusetts", state_code: "MA", slug: "massachusetts", publication_status: "coming_soon", public_url: "" },
      { state: "Michigan", state_code: "MI", slug: "michigan", publication_status: "coming_soon", public_url: "" },
      { state: "Minnesota", state_code: "MN", slug: "minnesota", publication_status: "coming_soon", public_url: "" },
      { state: "Mississippi", state_code: "MS", slug: "mississippi", publication_status: "coming_soon", public_url: "" },
      {
        "state": "Missouri",
        "state_code": "MO",
        "slug": "missouri",
        "publication_status": "coming_soon",
        "public_url": "",
        "staging_status": "review_draft_prepared",
        "ein_module": "ein",
        "official_sources": [
          {
            "source_id": "MO-SOS-001",
            "authority": "Missouri Secretary of State",
            "title": "Starting a Business",
            "url": "https://www.sos.mo.gov/business/corporations/startbusiness",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Official current page reviewed through web retrieval; direct request blocked.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "MO-SOS-002",
            "authority": "Missouri Secretary of State",
            "title": "Corporations FAQs",
            "url": "https://www.sos.mo.gov/business/corporations/faqs",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Official current page reviewed through web retrieval; direct request blocked.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "MO-SOS-003",
            "authority": "Missouri Secretary of State",
            "title": "Steps for Starting a Business",
            "url": "https://www.sos.mo.gov/business/outreach/starting_steps",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Official indexed startup sequence reviewed; direct access requires recheck.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "MO-SOS-004",
            "authority": "Missouri Secretary of State",
            "title": "Online Filing Resources",
            "url": "https://s1.sos.mo.gov/business/outreach/stepbystepguides",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Official indexed filing guides reviewed.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "MO-DOR-001",
            "authority": "Missouri Department of Revenue",
            "title": "Register a Business Location",
            "url": "https://dor.mo.gov/register-business/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "MO-DES-001",
            "authority": "Missouri Department of Labor and Industrial Relations",
            "title": "Unemployment Insurance Tax",
            "url": "https://labor.mo.gov/des/employers",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "MO-DES-002",
            "authority": "Missouri Department of Labor and Industrial Relations",
            "title": "Liability for Unemployment",
            "url": "https://labor.mo.gov/des/employers/liability",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "MO-DWC-001",
            "authority": "Missouri Department of Labor and Industrial Relations",
            "title": "Workers Compensation for Employers",
            "url": "https://labor.mo.gov/dwc/employers",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "MO-DWC-002",
            "authority": "Missouri Department of Labor and Industrial Relations",
            "title": "Workers Compensation Coverage FAQ",
            "url": "https://labor.mo.gov/faqs/knowledge-base/does-employer-have-carry-workers-compensation-insurance",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Official current indexed FAQ reviewed.",
            "link_status": "reachable"
          },
          {
            "source_id": "MO-DWC-003",
            "authority": "Missouri Department of Labor and Industrial Relations",
            "title": "Workers Compensation Insurance \u2014 requirements and exemptions",
            "url": "https://labor.mo.gov/dwc/employers/insurance",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          }
        ],
        "last_verified": "2026-10-04",
        "next_scheduled_review": "2027-01-02",
        "verification_status": "research_required",
        "verification_scope": "Supported claims reviewed individually; unresolved items and blocked link checks prevent activation.",
        "unresolved_items": [
          "Verify the statewide general-business-license conclusion explicitly from a current official government source; do not infer it from the licensing directory.",
          "Recheck blocked SOS formation, FAQ and corporate-report destinations; verify corporate deadlines/eligibility on the current filing page.",
          "Reconcile special owner, religious and motor-carrier elections against current DWC instructions before activation; the ordinary threshold and agency-listed exemption categories are verified.",
          "Complete desktop/mobile browser, keyboard and visual accessibility review before activation; the local browser runtime is unavailable in this session."
        ],
        "filing_authority": {
          "name": "Starting a Business",
          "url": "https://www.sos.mo.gov/business/corporations/startbusiness",
          "source_id": "MO-SOS-001",
          "requirements": [
            {
              "text": "SOS handles Missouri corporation, LLC and other covered entity filings. Applicable out-of-state entities require authorization to transact business; review the rules for the actual activity.",
              "source_ids": [
                "MO-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "official_business_portal": {
          "name": "Steps for Starting a Business",
          "url": "https://www.sos.mo.gov/business/outreach/starting_steps",
          "source_id": "MO-SOS-003",
          "requirements": [
            {
              "text": "Missouri SOS's startup sequence separates formation, tax and unemployment registration, insurance and licensing.",
              "source_ids": [
                "MO-SOS-003"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "name_search": {
          "name": "Starting a Business",
          "url": "https://www.sos.mo.gov/business/corporations/startbusiness",
          "source_id": "MO-SOS-001",
          "requirements": [
            {
              "text": "Search existing entity names through the SOS business portal. The entity name must meet distinguishability requirements; name research and reservation do not create exclusive trademark rights.",
              "source_ids": [
                "MO-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "state_registration": {
          "name": "Starting a Business",
          "url": "https://www.sos.mo.gov/business/corporations/startbusiness",
          "source_id": "MO-SOS-001",
          "requirements": [
            {
              "text": "Corporations and LLCs are created by filing the relevant articles. Sole proprietorships and general partnerships can begin without SOS entity-creation filings, but fictitious-name registration may apply.",
              "source_ids": [
                "MO-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_authority": {
          "name": "Register a Business Location",
          "url": "https://dor.mo.gov/register-business/",
          "source_id": "MO-DOR-001",
          "requirements": [
            {
              "text": "DOR registers applicable sales/use, withholding, corporate-income and other business-tax accounts based on the business's activity.",
              "source_ids": [
                "MO-DOR-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_registration": {
          "name": "Register a Business Location",
          "url": "https://dor.mo.gov/register-business/",
          "source_id": "MO-DOR-001",
          "requirements": [
            {
              "text": "DOR's online new-business registration includes sales, vendor's and consumer's use, withholding, unemployment, tire/battery fee and corporate income tax options. Select only the applicable accounts and keep their separate agency responsibilities clear.",
              "source_ids": [
                "MO-DOR-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "licenses_permits": {
          "name": "Corporations FAQs",
          "url": "https://www.sos.mo.gov/business/corporations/faqs",
          "source_id": "MO-SOS-002",
          "requirements": [
            {
              "text": "Check state licensing boards for your activity and the city or county for local business licenses and permits. Formation and tax registration do not establish that all operating approvals are complete.",
              "source_ids": [
                "MO-SOS-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "An explicit statewide general-business-license conclusion has not been verified from current official evidence. Research is required before activation.",
              "source_ids": [
                "MO-SOS-002"
              ],
              "status": "unresolved/research-required"
            },
            {
              "text": "SOS does not issue business licenses. Its FAQ directs businesses to local government; professional and activity licenses are separate. This alone does not prove a statewide absence of all general-license requirements.",
              "source_ids": [
                "MO-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ],
          "statewide_general_license": null,
          "statewide_general_license_status": "unresolved/research-required"
        },
        "local_requirements_note": "Ask each city or county where the business operates about business licensing, zoning, occupancy, home-business and activity-specific permits. Check the responsible state licensing agency as well.",
        "employer_registration": {
          "name": "Register a Business Location",
          "url": "https://dor.mo.gov/register-business/",
          "source_id": "MO-DOR-001",
          "requirements": [
            {
              "text": "Use the online registration pathway for applicable withholding and unemployment accounts, then manage UI obligations with the Division of Employment Security.",
              "source_ids": [
                "MO-DOR-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "unemployment_insurance": {
          "name": "Liability for Unemployment",
          "url": "https://labor.mo.gov/des/employers/liability",
          "source_id": "MO-DES-002",
          "requirements": [
            {
              "text": "A general business becomes liable under tests including $1,500 in wages in a calendar quarter, a worker on part of a day in twenty different weeks, FUTA liability with a Missouri worker, or successor liability.",
              "source_ids": [
                "MO-DES-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Household employers have a $1,000 cash-wage quarterly test; agricultural employers have $20,000/quarter or ten-worker/twenty-week tests. 501(c)(3) organizations, government and religious employers have separate rules. These are not the workers compensation headcount thresholds.",
              "source_ids": [
                "MO-DES-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "workers_compensation": {
          "name": "Workers Compensation for Employers",
          "url": "https://labor.mo.gov/dwc/employers",
          "source_id": "MO-DWC-001",
          "requirements": [
            {
              "text": "Coverage generally starts at five employees; construction employers must cover one or more. Count full-time and part-time workers, and review covered family/owner classifications rather than applying a payroll-size test.",
              "source_ids": [
                "MO-DWC-001"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Employers below the applicable threshold or with exempt employees may elect coverage. Sole proprietors and partners are not personally covered unless they elect it; close family employees and LLC members are presumed covered unless they opt out. Consult the official exemptions guidance for the complete categories.",
              "source_ids": [
                "MO-DWC-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "DWC lists specific exempt categories, including farm labor, domestic and occasional private-household work, qualifying real-estate agents and direct sellers, certain unpaid nonprofit volunteers and certain youth/inter-school event officials. Railroad, postal and maritime workers have separate federal-law treatment. Apply the category conditions directly; an owner election is not a blanket exemption for employees.",
              "source_ids": [
                "MO-DWC-003"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "ongoing_reporting": {
          "name": "Corporations FAQs",
          "url": "https://www.sos.mo.gov/business/corporations/faqs",
          "source_id": "MO-SOS-002",
          "requirements": [
            {
              "text": "Missouri LLCs do not file an SOS annual report. LPs also do not have that annual filing. LLP and LLLP registration lasts one year and requires renewal to continue. Corporate registration reports are separate.",
              "source_ids": [
                "MO-SOS-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Corporations use annual reports or eligible biennial registration reports. Confirm the current entity-specific deadline and eligibility; nonprofit and for-profit reporting must not be treated as identical.",
              "source_ids": [
                "MO-SOS-004"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "registered_agent": {
          "name": "Corporations FAQs",
          "url": "https://www.sos.mo.gov/business/corporations/faqs",
          "source_id": "MO-SOS-002",
          "requirements": [
            {
              "text": "Maintain the required registered agent and registered office for covered entities. Failure to maintain an agent can lead to dissolution or loss of authorized status.",
              "source_ids": [
                "MO-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "trade_name": {
          "name": "Starting a Business",
          "url": "https://www.sos.mo.gov/business/corporations/startbusiness",
          "source_id": "MO-SOS-001",
          "requirements": [
            {
              "text": "A business operating under a name other than its true name must register a fictitious name with SOS. This filing is separate from formation and does not secure exclusive rights to the name.",
              "source_ids": [
                "MO-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        }
      },
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
        ein_module: "ein",
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
      {
        "state": "Texas",
        "state_code": "TX",
        "slug": "texas",
        "publication_status": "coming_soon",
        "public_url": "",
        "staging_status": "review_draft_prepared",
        "ein_module": "ein",
        "official_sources": [
          {
            "source_id": "TX-SOS-001",
            "authority": "Texas Secretary of State",
            "title": "Business structures and formation",
            "url": "https://www.sos.state.tx.us/corp/businessstructure.shtml",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-SOS-002",
            "authority": "Texas Secretary of State",
            "title": "Name Filings FAQs",
            "url": "https://www.sos.texas.gov/corp/namefilingsfaqs.shtml",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-SOS-003",
            "authority": "Texas Secretary of State",
            "title": "Business Organizations Forms",
            "url": "https://www.sos.state.tx.us/corp/forms_boc.shtml",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-GOV-001",
            "authority": "Office of the Texas Governor",
            "title": "Business Permit Office",
            "url": "https://gov.texas.gov/business/page/business-permits-office",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-GOV-002",
            "authority": "Office of the Texas Governor",
            "title": "Start a Business in Texas",
            "url": "https://gov.texas.gov/business/page/start-a-business",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-CPA-001",
            "authority": "Texas Comptroller of Public Accounts",
            "title": "Texas Sales and Use Tax Permit",
            "url": "https://comptroller.texas.gov/taxes/permit/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-CPA-002",
            "authority": "Texas Comptroller of Public Accounts",
            "title": "Franchise Tax",
            "url": "https://comptroller.texas.gov/taxes/franchise/",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-CPA-003",
            "authority": "Texas Comptroller of Public Accounts",
            "title": "No Tax Due Reporting for Report Years 2024 and Later",
            "url": "https://comptroller.texas.gov/taxes/franchise/ntd-rpt-updates-2024.php",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-TWC-001",
            "authority": "Texas Workforce Commission",
            "title": "Unemployment Tax Registration",
            "url": "https://www.twc.texas.gov/programs/unemployment-tax/registration",
            "last_checked": "2026-10-04",
            "evidence_method": "official_search_index",
            "evidence_note": "Direct retrieval blocked; confirm current registration page and access before activation.",
            "link_status": "access_blocked"
          },
          {
            "source_id": "TX-TWC-002",
            "authority": "Texas Workforce Commission",
            "title": "Unemployment Insurance Law - Coverage Issues",
            "url": "https://efte.twc.texas.gov/ui_law_coverage_issues.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-TDI-001",
            "authority": "Texas Department of Insurance",
            "title": "Employer resources",
            "url": "https://www.tdi.texas.gov/wc/employer/index.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-TDI-002",
            "authority": "Texas Department of Insurance",
            "title": "Workers compensation coverage categories",
            "url": "https://www.tdi.texas.gov/wc/employer/coverage.html",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-TDI-003",
            "authority": "Texas Department of Insurance",
            "title": "Required coverage notice for government construction projects",
            "url": "https://www.tdi.texas.gov/forms/dwc/notice8.pdf",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-SOS-004",
            "authority": "Texas Secretary of State",
            "title": "Formation of Texas Entities FAQ \u2014 annual and periodic reports",
            "url": "https://www.sos.state.tx.us/corp/formationfaqs.shtml",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          },
          {
            "source_id": "TX-SOS-005",
            "authority": "Texas Secretary of State",
            "title": "Nonprofit Corporation Periodic Reports FAQ",
            "url": "https://www.sos.state.tx.us/corp/nonprofitfaqs.shtml",
            "last_checked": "2026-10-04",
            "evidence_method": "direct",
            "evidence_note": "",
            "link_status": "reachable"
          }
        ],
        "last_verified": "2026-10-04",
        "next_scheduled_review": "2027-01-02",
        "verification_status": "research_required",
        "verification_scope": "Supported claims reviewed individually; unresolved items and blocked link checks prevent activation.",
        "unresolved_items": [
          "Directly verify the current TWC registration destination and instructions; the source is blocked in this environment.",
          "Complete desktop/mobile browser, keyboard and visual accessibility review before activation; the local browser runtime is unavailable in this session."
        ],
        "filing_authority": {
          "name": "Business structures and formation",
          "url": "https://www.sos.state.tx.us/corp/businessstructure.shtml",
          "source_id": "TX-SOS-001",
          "requirements": [
            {
              "text": "The Secretary of State handles formation filings for Texas filing entities, including LLCs and corporations.",
              "source_ids": [
                "TX-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "official_business_portal": {
          "name": "Start a Business in Texas",
          "url": "https://gov.texas.gov/business/page/start-a-business",
          "source_id": "TX-GOV-002",
          "requirements": [
            {
              "text": "The Governor's startup guide separates structure and formation from tax, licensing and employer obligations.",
              "source_ids": [
                "TX-GOV-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "name_search": {
          "name": "Name Filings FAQs",
          "url": "https://www.sos.texas.gov/corp/namefilingsfaqs.shtml",
          "source_id": "TX-SOS-002",
          "requirements": [
            {
              "text": "Use SOS name-availability instructions and SOSDirect to research an entity name. Preliminary clearance is not a final filing decision or permission to infringe another person's name rights.",
              "source_ids": [
                "TX-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "state_registration": {
          "name": "Business structures and formation",
          "url": "https://www.sos.state.tx.us/corp/businessstructure.shtml",
          "source_id": "TX-SOS-001",
          "requirements": [
            {
              "text": "LLCs and corporations are formed through SOS filings. A sole proprietorship or general partnership does not use an LLC or corporate formation filing; assumed-name requirements can still apply.",
              "source_ids": [
                "TX-SOS-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_authority": {
          "name": "Franchise Tax",
          "url": "https://comptroller.texas.gov/taxes/franchise/",
          "source_id": "TX-CPA-002",
          "requirements": [
            {
              "text": "The Comptroller administers state business taxes. Franchise tax applies to taxable entities formed in Texas or doing business in Texas, subject to statutory exclusions and exemptions.",
              "source_ids": [
                "TX-CPA-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "tax_registration": {
          "name": "Texas Sales and Use Tax Permit",
          "url": "https://comptroller.texas.gov/taxes/permit/",
          "source_id": "TX-CPA-001",
          "requirements": [
            {
              "text": "Review sales/use tax permit requirements if engaged in Texas and selling, leasing or renting taxable goods or providing taxable services. Use the Comptroller's permit application, and check separate rules for remote sellers and marketplace sales.",
              "source_ids": [
                "TX-CPA-001"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "licenses_permits": {
          "name": "Business Permit Office",
          "url": "https://gov.texas.gov/business/page/business-permits-office",
          "source_id": "TX-GOV-001",
          "requirements": [
            {
              "text": "Texas does not require a statewide general business license. State activity/professional permits and city or county requirements can still apply.",
              "source_ids": [
                "TX-GOV-001"
              ],
              "status": "VERIFIED"
            }
          ],
          "statewide_general_license": false,
          "statewide_general_license_status": "VERIFIED"
        },
        "local_requirements_note": "Contact the city and county for local licensing and permits. Ask the county appraisal district or tax office about local business and property taxes.",
        "employer_registration": {
          "name": "Unemployment Tax Registration",
          "url": "https://www.twc.texas.gov/programs/unemployment-tax/registration",
          "source_id": "TX-TWC-001",
          "requirements": [
            {
              "text": "Register with TWC when liable for unemployment tax; use its current unemployment-tax registration instructions.",
              "source_ids": [
                "TX-TWC-001"
              ],
              "status": "unresolved/research-required"
            },
            {
              "text": "Before hiring, review the state employer resources linked by the Governor's startup guide, including new-hire reporting and workplace obligations. The UI registration is separate from entity formation and sales-tax registration.",
              "source_ids": [
                "TX-GOV-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "unemployment_insurance": {
          "name": "Unemployment Insurance Law - Coverage Issues",
          "url": "https://efte.twc.texas.gov/ui_law_coverage_issues.html",
          "source_id": "TX-TWC-002",
          "requirements": [
            {
              "text": "General employers can become liable after paying $1,500 or more in a calendar quarter, or employing at least one worker on part of a day in 20 different weeks in the current or preceding year. FUTA liability and successor rules also matter.",
              "source_ids": [
                "TX-TWC-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Domestic, agricultural, nonprofit and governmental employers have separate tests or exclusions. Do not apply the general-employer threshold to every employer.",
              "source_ids": [
                "TX-TWC-002"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "workers_compensation": {
          "name": "Employer resources",
          "url": "https://www.tdi.texas.gov/wc/employer/index.html",
          "source_id": "TX-TDI-001",
          "requirements": [
            {
              "text": "Most private employers may choose workers compensation coverage. Non-subscribers still have employee/state notices and specified injury, illness and fatality reporting duties; lack of required coverage must not be treated as lack of duties.",
              "source_ids": [
                "TX-TDI-001"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Texas governmental entities must have coverage. Government construction projects carry coverage requirements for contractors and persons providing project services. Review the applicable public contract and DWC rules.",
              "source_ids": [
                "TX-TDI-002",
                "TX-TDI-003"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "ongoing_reporting": {
          "name": "Franchise Tax",
          "url": "https://comptroller.texas.gov/taxes/franchise/",
          "source_id": "TX-CPA-002",
          "requirements": [
            {
              "text": "Franchise reporting is generally due May 15, moved to the next business day when it falls on a weekend or holiday. The no-tax-due threshold for report years 2026 and 2027 is $2,650,000; use the appropriate report-year rules.",
              "source_ids": [
                "TX-CPA-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Being at or below the threshold generally removes the No Tax Due Report, but the applicable Public Information Report or Ownership Information Report remains required. Qualifying new veteran-owned businesses and passive entities have different reporting treatment.",
              "source_ids": [
                "TX-CPA-003"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Texas domestic LLPs file an SOS annual report by June 1 in each year after the registration takes effect. Texas and registered foreign nonprofit corporations file a periodic report when SOS requests it, no more often than once every four years. Other entity types have different maintenance filings; the Comptroller franchise workflow is not a universal SOS annual report.",
              "source_ids": [
                "TX-SOS-004",
                "TX-SOS-005"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "registered_agent": {
          "name": "Business Organizations Forms",
          "url": "https://www.sos.state.tx.us/corp/forms_boc.shtml",
          "source_id": "TX-SOS-003",
          "requirements": [
            {
              "text": "Use your entity's current SOS formation instructions to confirm registered-agent eligibility, consent and the Texas registered-office requirements. Keep the agent and office information current.",
              "source_ids": [
                "TX-SOS-003"
              ],
              "status": "VERIFIED"
            }
          ]
        },
        "trade_name": {
          "name": "Name Filings FAQs",
          "url": "https://www.sos.texas.gov/corp/namefilingsfaqs.shtml",
          "source_id": "TX-SOS-002",
          "requirements": [
            {
              "text": "An assumed-name filing depends on structure. Listed filing entities use SOS; sole proprietors and general partnerships generally use the appropriate county clerk. SOS assumed-name filers are not also required to file at county level.",
              "source_ids": [
                "TX-SOS-002"
              ],
              "status": "VERIFIED"
            }
          ]
        }
      },
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
