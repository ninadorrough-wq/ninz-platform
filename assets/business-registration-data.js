(function () {
  "use strict";

  // Review-only records share one evidence/section shape. This never sets a public URL.
  function stagedState(state, code, slug, sources, sections, unresolved, reviewDate = '2026-10-13') {
    const official_sources = Object.entries(sources).map(([key, [authority, title, url, note = '', method = 'direct', link = 'reachable', checked = '2026-10-13']]) => ({
      source_id: `${code}-${key}`, authority, title, url, last_checked: checked,
      evidence_method: method, evidence_note: note, link_status: link
    }));
    const record = {
      state, state_code: code, slug, publication_status: 'coming_soon', public_url: '',
      staging_status: 'review_draft_prepared', ein_module: 'ein', official_sources,
      last_verified: reviewDate, next_scheduled_review: '2027-01-13',
      verification_status: 'research_required',
      verification_scope: 'Only individually sourced claims are reviewed; unresolved items prevent activation.',
      unresolved_items: [...unresolved, 'Complete desktop/mobile browser, keyboard and visual accessibility review before activation.'],
      local_requirements_note: 'Local licenses, zoning and permits depend on the location and activity; verify with the relevant local authority.'
    };
    for (const [field, [key, claim, status = 'VERIFIED', additionalSources = []]] of Object.entries(sections)) {
      const source = official_sources.find(item => item.source_id === `${code}-${key}`);
      if (!source) throw new Error(`Missing ${code}-${key}`);
      record[field] = {
        name: source.title, url: source.url, source_id: source.source_id,
        requirements: [{ text: claim, source_ids: [source.source_id, ...additionalSources.map(id => `${code}-${id}`)], status }]
      };
    }
    record.licenses_permits.statewide_general_license = null;
    record.licenses_permits.statewide_general_license_status = 'unresolved/research-required';
    return record;
  }

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
          },
          {
            "source_id": "AR-SOS-011",
            "authority": "Arkansas Secretary of State",
            "title": "Fictitious Name Application DN-18/F-18 (revised January 2025)",
            "url": "https://www.sos.arkansas.gov/uploads/bcs/DN-18_2.pdf",
            "last_checked": "2026-10-13",
            "evidence_method": "direct",
            "evidence_note": "Official form lists LLC and other entity types, paper fee, and county-copy instruction; online fee is on the SOS LLC forms page.",
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
          "LLC fictitious-name form and county-copy instruction are verified; confirm the separate county circuit-clerk treatment for unincorporated businesses and other entity-specific exceptions.",
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
              "text": "The SOS DN-18/F-18 form includes LLCs ($25 form fee). A returned copy must be filed with the county clerk where the entity's registered office is located, except when that office is in Pulaski County. Unincorporated-business treatment remains separate.",
              "source_ids": [
                "AR-SOS-011"
              ],
              "status": "VERIFIED"
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
            "source_id": "CO-DOR-003",
            "authority": "Colorado Department of Revenue",
            "title": "CR 0100 Business Registration",
            "url": "https://tax.colorado.gov/CR0100",
            "last_checked": "2026-10-13",
            "evidence_method": "direct",
            "evidence_note": "Sales and withholding account application; determine applicable taxes.",
            "link_status": "reachable"
          },
          {
            "source_id": "CO-DOR-004",
            "authority": "Colorado Department of Revenue",
            "title": "How to Apply for a Colorado Sales Tax License",
            "url": "https://tax.colorado.gov/how-to-apply-for-a-colorado-sales-tax-license",
            "last_checked": "2026-10-13",
            "evidence_method": "direct",
            "evidence_note": "State license covers state-administered taxes; home-rule requirements are separate.",
            "link_status": "reachable"
          },
          {
            "source_id": "CO-CHILD-001",
            "authority": "Colorado Child Support Services",
            "title": "New Hire Reporting",
            "url": "https://childsupport.colorado.gov/new-hire-reporting",
            "last_checked": "2026-10-13",
            "evidence_method": "direct",
            "evidence_note": "Twenty-calendar-day reporting guidance; interactive submission requires manual review.",
            "link_status": "reachable"
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
          "Confirm business-specific tax account selections and any home-rule local-tax registration in the interactive filing flows.",
          "Directly verify CDLE UI registration, liability thresholds, workers compensation exclusions and the one-employee rule.",
          "Verify FAMLI registration applicability and interactive new-hire submission for the employer category.",
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
          "name": "CR 0100 Business Registration",
          "url": "https://tax.colorado.gov/CR0100",
          "source_id": "CO-DOR-003",
          "requirements": [
            {
              "text": "CR 0100 is the DOR application for applicable sales-tax and wage-withholding accounts; select only the accounts that apply to the business.",
              "source_ids": ["CO-DOR-003"],
              "status": "VERIFIED"
            },
            {
              "text": "The state sales-tax license covers state and state-administered taxes; verify home-rule city licensing and collection separately through the local government.",
              "source_ids": ["CO-DOR-004"],
              "status": "VERIFIED"
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
            },
            {
              "text": "Colorado new hires must be reported within 20 calendar days through the state child-support route; confirm the interactive submission method for the employer.",
              "source_ids": ["CO-CHILD-001"],
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
      stagedState('Iowa', 'IA', 'iowa', {
        'SOS-001': ['Iowa Secretary of State', 'How do I form an LLC?', 'https://help.sos.iowa.gov/how-do-i-form-llc'],
        'SOS-002': ['Iowa Secretary of State', 'Business Entity Forms and Fees', 'https://sos.iowa.gov/businesses/business-entity-forms-and-fees'],
        'SOS-003': ['Iowa Secretary of State', 'Fast Track Filing', 'https://filings.sos.iowa.gov/', 'Online filing account; interactive destination.', 'official_search_index', 'manual_review_required'],
        'SOS-005': ['Iowa Secretary of State', 'Understanding Name Availability in Iowa', 'https://help.sos.iowa.gov/understanding-name-availability-iowa'],
        'SOS-006': ['Iowa Secretary of State', 'How do I file a Fictitious Name Resolution?', 'https://help.sos.iowa.gov/how-do-i-file-fictitious-name-resolution'],
        'SOS-004': ['Iowa Secretary of State', 'How Do I File a Biennial Report?', 'https://help.sos.iowa.gov/how-do-i-file-biennial-report', 'Current entity-specific fees need confirmation.', 'direct', 'reachable'],
        'DOR-001': ['Iowa Department of Revenue', 'Business Permit Registration', 'https://revenue.iowa.gov/business-permit-registration'],
        'DOR-002': ['Iowa Department of Revenue', 'GovConnectIowa', 'https://govconnect.iowa.gov/', 'Interactive tax-registration destination.', 'official_search_index', 'manual_review_required'],
        'IWD-001': ['Iowa Workforce Development', 'Employing Units', 'https://workforce.iowa.gov/employers/unemployment-insurance/unemployment-insurance-employer-handbook/employing-units'],
        'IWD-002': ['Iowa Workforce Development', 'UI Employer Systems', 'https://workforce.iowa.gov/employers/unemployment-insurance/systems', 'Agency identifies myIowaUI tax system; account interaction remains manual.', 'direct', 'reachable'],
        'DIAL-001': ['Iowa Department of Inspections, Appeals, and Licensing', 'Workers Compensation Compliance', 'https://dial.iowa.gov/hearings/workers-comp/compliance']
      }, {
        filing_authority: ['SOS-001', 'The Secretary of State handles Iowa LLC formation; the structure and out-of-state status determine the filing.'],
        official_business_portal: ['SOS-003', 'Fast Track Filing is the state filing destination; confirm the filing type in the account.'],
        name_search: ['SOS-005', 'Use the SOS Business Entity Search to research a proposed LLC or corporation name. Fast Track Filing also tests availability during formation; the agency makes the filing decision.'],
        state_registration: ['SOS-002', 'A domestic LLC files a Certificate of Organization for $50; a foreign LLC registration statement is $100. Other entity types have different forms and fees.'],
        tax_authority: ['DOR-001', 'The Department of Revenue administers business tax permits; determine which tax accounts apply.'],
        tax_registration: ['DOR-002', 'Use GovConnectIowa for applicable tax registration; the permit-registration instructions identify the available methods.'],
        licenses_permits: ['SOS-001', 'Determine professional, activity-specific and local licensing separately; a universal statewide business-license conclusion is not established here.', 'unresolved/research-required'],
        employer_registration: ['IWD-001', 'Employing units register with Iowa Workforce Development within 30 days of first wages to determine UI liability.'],
        unemployment_insurance: ['IWD-002', 'Use the official employer UI account route; liability and special employer categories require agency determination.', 'unresolved/research-required'],
        workers_compensation: ['DIAL-001', 'Most Iowa employers must carry workers compensation liability insurance or register as self-insured; review statutory exceptions.'],
        ongoing_reporting: ['SOS-002', 'Iowa LLC biennial reports are due in odd-numbered years from January 1 through April 1; the SOS lists $30 online and $45 paper filing fees. Other entity types use different years and fees.'],
        registered_agent: ['SOS-001', 'Check the current certificate instructions for the registered-agent and office requirements.'],
        trade_name: ['SOS-006', 'For an existing business entity adopting a fictitious name, Fast Track Filing directs an account holder to Business Filings, File A Document, Existing Entities, then Fictitious Name Resolution; search the entity and review and pay. The SOS forms schedule lists a $5 filing fee. Confirm the applicable entity and proposed use.', 'VERIFIED', ['SOS-002']]
      }, ['Confirm any entity-specific fictitious-name obligation beyond the SOS filing instructions.', 'Verify activity-specific license requirements for the proposed business.', 'Confirm any account-only tax/UI form that is essential to the selected employer category.', 'Complete a genuine mobile-width visual and keyboard review.']),
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
      stagedState('Louisiana', 'LA', 'louisiana', {
        'SOS-001': ['Louisiana Secretary of State', 'Start a Business', 'https://www.sos.la.gov/business-services/start-a-business'],
        'SOS-002': ['Louisiana Secretary of State', 'Forms and Fee Schedule', 'https://www.sos.la.gov/business-services/forms-fee-schedule'],
        'SOS-003': ['Louisiana Secretary of State', 'GeauxBiz', 'https://geauxbiz.sos.la.gov/', 'Interactive filing route; manual account review pending.', 'official_search_index', 'manual_review_required'],
        'SOS-004': ['Louisiana Secretary of State', 'Search Louisiana Business Filings', 'https://coraweb.sos.la.gov/commercialsearch/commercialsearch.aspx', 'Official search with reCAPTCHA; manual completion pending.', 'official_search_index', 'manual_review_required'],
        'SOS-005': ['Louisiana Secretary of State', 'Business Filings Frequently Asked Questions', 'https://www.sos.la.gov/business-services/frequently-asked-questions'],
        'DOR-001': ['Louisiana Department of Revenue', 'Business Registration', 'https://revenue.louisiana.gov/businesses/general-resources/business-registration/'],
        'DOR-002': ['Louisiana Department of Revenue', 'LaTAP', 'https://latap.revenue.louisiana.gov/', 'Interactive tax portal.', 'official_search_index', 'manual_review_required'],
        'LWC-001': ['Louisiana Workforce Commission', 'UI Employer Account Information', 'https://www.laworks.net/UnemploymentInsurance/UI_EmployerAccountInformation.asp'],
        'LWC-002': ['Louisiana Workforce Commission', 'Employer Registration', 'https://laors9.laworks.net/lastarsregistration', 'Interactive UI registration route.', 'official_search_index', 'manual_review_required'],
        'LWC-003': ['Louisiana Workforce Commission', 'Workers Compensation Coverage FAQ', 'https://www.laworks.net/FAQs/FAQ_WorkComp_EmployerCoverage.asp']
        ,'LAW-001': ['Louisiana Legislature', 'Revised Statutes 12:1308.1', 'https://legis.la.gov/legis/Law.aspx?d=76256']
      }, {
        filing_authority: ['SOS-001', 'The Secretary of State provides entity filing and start-up instructions; select the correct domestic or foreign form.'],
        official_business_portal: ['SOS-003', 'GeauxBiz is the online business filing portal; confirm account steps and any applicable local requirements.'],
        name_search: ['SOS-005', 'The SOS directs a preliminary proposed-name search through its Commercial Database. Search without the corporate ending; the search returns identical or similar records and does not itself reserve the name.'],
        state_registration: ['SOS-002', 'Domestic LLC Articles of Organization, form #365, cost $125; foreign LLC form #972 costs $185. Filing options and additional charges should be checked at submission.'],
        tax_authority: ['DOR-001', 'The Department of Revenue directs businesses to determine sales, withholding and other state tax accounts.'],
        tax_registration: ['DOR-002', 'Register applicable tax accounts through LaTAP according to Revenue instructions.'],
        licenses_permits: ['SOS-001', 'Check occupation, industry and local licensing; a universal statewide license conclusion remains unverified.', 'unresolved/research-required'],
        employer_registration: ['LWC-001', 'Every employing unit completes the state unemployment application for a liability determination; entity formation alone does not create the UI account.'],
        unemployment_insurance: ['LWC-002', 'Use the Workforce Commission employer-registration route to determine UI liability; employer categories have different tests.'],
        workers_compensation: ['LWC-003', 'Review the Workers Compensation coverage FAQ for covered employment and specific excluded worker categories.'],
        ongoing_reporting: ['LAW-001', 'A Louisiana LLC annual report is due on or before the anniversary date of organization. The SOS lists a $35 fee and directs online annual reporting through GeauxBiz or the business record in its Commercial Database.', 'VERIFIED', ['SOS-002', 'SOS-005']],
        registered_agent: ['SOS-002', 'LLC filings distinguish registered office and agent; review form #365 instructions before filing.'],
        trade_name: ['SOS-005', 'The SOS permits a person, corporation, LLC or partnership to apply for a trade name; its fee schedule lists form #309 at $95. The SOS says a DBA is not filed with its office. Determine the appropriate filing and local requirements for the proposed use.', 'VERIFIED', ['SOS-002']]
      }, ['Confirm which trade-name or parish DBA filing applies to the proposed entity and use.', 'Verify activity-specific license requirements for the proposed business.', 'Confirm any account-only GeauxBiz, LaTAP or Workforce Commission step essential to the selected filing.', 'Complete a genuine mobile-width visual and keyboard review.']),
      { state: "Maine", state_code: "ME", slug: "maine", publication_status: "coming_soon", public_url: "" },
      { state: "Maryland", state_code: "MD", slug: "maryland", publication_status: "coming_soon", public_url: "" },
      { state: "Massachusetts", state_code: "MA", slug: "massachusetts", publication_status: "coming_soon", public_url: "" },
      { state: "Michigan", state_code: "MI", slug: "michigan", publication_status: "coming_soon", public_url: "" },
      { state: "Minnesota", state_code: "MN", slug: "minnesota", publication_status: "coming_soon", public_url: "" },
      stagedState('Mississippi', 'MS', 'mississippi', {
        'SOS-001': ['Mississippi Secretary of State', 'Business Services and External Affairs', 'https://www.sos.ms.gov/business-services-external-affairs'],
        'SOS-002': ['Mississippi Secretary of State', 'Business Filing Portal', 'https://corp.sos.ms.gov/corp/', 'Interactive filing route.', 'official_search_index', 'manual_review_required'],
        'SOS-003': ['Mississippi Secretary of State', 'Services and Fees (revised October 2024)', 'https://www.sos.ms.gov/sites/default/files/fees_and_forms/Services%20%26%20Fees%20Document.pdf', 'Official fee schedule directly reviewed; select the entity-specific filing.', 'direct', 'reachable'],
        'SOS-004': ['Mississippi Secretary of State', 'Annual Reports', 'https://www.sos.ms.gov/business-services/annual-reports'],
        'SOS-005': ['Mississippi Secretary of State', 'Registered Agents', 'https://www.sos.ms.gov/business-services-external-affairs/registered-agents'],
        'DOR-001': ['Mississippi Department of Revenue', 'Register for Taxes', 'https://www.dor.ms.gov/business/sales-use-tax/register-taxes'],
        'DOR-002': ['Mississippi Department of Revenue', 'Taxpayer Access Point', 'https://tap.dor.ms.gov/', 'Interactive tax-registration destination.', 'official_search_index', 'manual_review_required'],
        'MDES-001': ['Mississippi Department of Employment Security', 'Register with Us', 'https://mdes.ms.gov/employers/register-with-us/'],
        'MDES-002': ['Mississippi Department of Employment Security', 'Access MS Tax', 'https://accessmstax.mdes.ms.gov/', 'Interactive UI portal.', 'official_search_index', 'manual_review_required'],
        'MWCC-001': ['Mississippi Workers Compensation Commission', 'Workers Compensation Facts', 'https://www.mwcc.ms.gov/pdf/WCFacts2013.pdf', 'Historical 2013 agency overview; current section 71-3-5 text was supplied separately as LAW-001.', 'unresolved', 'manual_review_required'],
        'LAW-001': ['Mississippi Workers Compensation Commission', 'Commission-supplied Mississippi Code Annotated §71-3-5 (2026 Westlaw text)', 'https://www.sos.ms.gov/publications-external-affairs/mississippi-law', 'Commission supplied the five-page statute text on October 14, 2026; Westlaw states current through laws effective July 17, 2026. The SOS URL is the official code entry point, not a public link to the supplied PDF. Section addresses five regularly employed workers, excluded categories, voluntary coverage, and a written owner election with specified employee-count effect.', 'agency_supplied_statute', 'manual_review_required', '2026-10-14'],
        'COURT-001': ['Mississippi Court of Appeals', '2025 opinion applying section 71-3-5', 'https://courts.ms.gov/images/Opinions/CO188462.pdf', 'December 2025 opinion confirms the five-employee statutory trigger; does not settle all exceptions.', 'direct', 'reachable'],
        'SOS-006': ['Mississippi Secretary of State', 'Business FAQs', 'https://www.sos.ms.gov/business-services/business-faqs', 'SOS explains current online filing menus and annual-report submission.', 'direct', 'reachable']
      }, {
        filing_authority: ['SOS-001', 'The Secretary of State handles Mississippi entity filings; select the correct form for domestic or foreign status.'],
        official_business_portal: ['SOS-006', 'Create or use a Business Services account; after login choose formation, foreign registration, annual reports or amendments under Business Filings.'],
        name_search: ['SOS-002', 'Confirm proposed name availability within the SOS system before filing.', 'unresolved/research-required'],
        state_registration: ['SOS-003', 'The SOS services-and-fees schedule lists a $50 Certificate of Formation for a Mississippi LLC and a $250 Application for Registration of a Foreign LLC. Select the correct entity filing in the SOS portal.'],
        tax_authority: ['DOR-001', 'The Department of Revenue administers applicable sales, use and other business tax accounts.'],
        tax_registration: ['DOR-002', 'Use Taxpayer Access Point for applicable tax registration according to DOR instructions.'],
        licenses_permits: ['SOS-001', 'Check industry-specific state licensing and local permits; statewide general-license applicability remains unverified.', 'unresolved/research-required'],
        employer_registration: ['MDES-001', 'MDES separates employment-service registration from the business registration used for UI tax reporting and payment.'],
        unemployment_insurance: ['MDES-002', 'Use the MDES new-business tax registration route for unemployment tax when applicable; confirm liability categories.', 'unresolved/research-required'],
        workers_compensation: ['LAW-001', 'Mississippi generally requires workers compensation coverage for qualifying private employers with five or more regularly employed workers, subject to statutory exclusions and other applicable provisions. Section 71-3-5 identifies excluded categories, voluntary coverage, and a written election by qualifying sole proprietors, partners and corporate employees owning at least 15 percent of stock to be exempt from coverage and the five-worker count. Whether a particular worker counts depends on the law and employment relationship; consult the Mississippi Workers Compensation Commission and, when necessary, a qualified Mississippi attorney for the proposed operation.', 'VERIFIED', ['COURT-001']],
        ongoing_reporting: ['SOS-004', 'For-profit corporation and LLC annual reports are due April 15, nonprofit reports May 15; reports are filed online. The SOS fee schedule lists no fee for a Mississippi LLC report and $250 for a foreign LLC report.', 'VERIFIED', ['SOS-003']],
        registered_agent: ['SOS-005', 'A noncommercial registered agent must have a physical Mississippi address and consent to serve; a commercial registered agent follows a separate registration process. Confirm the selected agent in the filing portal.'],
        trade_name: ['SOS-003', 'The SOS fee schedule lists Fictitious Business Name Registration at $25. Confirm whether the proposed name and entity require or elect this filing before relying on it.', 'unresolved/research-required']
      }, ['Determine any workers-compensation exclusion, owner election and employee count for the proposed operation with the Commission or qualified Mississippi counsel.', 'Confirm current fictitious-name applicability; the $25 fee is verified.', 'Verify activity-specific licensing for the proposed business.', 'Confirm any account-only TAP or MDES form essential to the selected filing.', 'Complete a genuine mobile-width visual and keyboard review.'], '2026-10-14'),
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
            "source_id": "MO-SOS-005",
            "authority": "Missouri Secretary of State",
            "title": "Online Annual and Biennial Registration Reports",
            "url": "https://www.sos.mo.gov/fileonline/reports",
            "last_checked": "2026-10-13",
            "evidence_method": "direct",
            "evidence_note": "Official reporting instructions and filing entry point; account flow needs manual review.",
            "link_status": "reachable"
          },
          {
            "source_id": "MO-SOS-006",
            "authority": "Missouri Secretary of State",
            "title": "Corporation Filing Requirements",
            "url": "https://www.sos.mo.gov/business/corporations/filings",
            "last_checked": "2026-10-13",
            "evidence_method": "direct",
            "evidence_note": "Corporate registration-report deadline guidance.",
            "link_status": "reachable"
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
          "Recheck blocked SOS formation and FAQ destinations; confirm entity-specific report account and eligible biennial elections in the interactive filing portal.",
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
          "name": "Online Annual and Biennial Registration Reports",
          "url": "https://www.sos.mo.gov/fileonline/reports",
          "source_id": "MO-SOS-005",
          "requirements": [
            {
              "text": "Missouri LLCs do not file an SOS annual report. LPs also do not have that annual filing. LLP and LLLP registration lasts one year and requires renewal to continue. Corporate registration reports are separate.",
              "source_ids": [
                "MO-SOS-002"
              ],
              "status": "VERIFIED"
            },
            {
              "text": "Corporations formed or qualified after July 1, 2003 file annual registration reports by the end of the formation month (or qualification month); earlier entities use their last report month. Eligible biennial elections and nonprofit treatment differ. The official report portal requires an account.",
              "source_ids": ["MO-SOS-005", "MO-SOS-006"],
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
      stagedState('Nebraska', 'NE', 'nebraska', {
        'SOS-001': ['Nebraska Secretary of State', 'New Business Information', 'https://sos.nebraska.gov/business-services/new-business-information'],
        'SOS-002': ['Nebraska Secretary of State', 'Forms and Fee Information', 'https://sos.nebraska.gov/business-services/forms-and-fee-information'],
        'SOS-003': ['Nebraska Secretary of State', 'Annual and Biennial Reporting', 'https://sos.nebraska.gov/business-services/annual-biennial-reporting'],
        'SOS-004': ['Nebraska Secretary of State', 'Corporate Document eDelivery', 'https://www.nebraska.gov/apps-sos-edocs/'],
        'SOS-005': ['Nebraska Secretary of State', 'Corporate and Business Search', 'https://www.nebraska.gov/sos/corp/corpsearch.cgi', 'Public search has reCAPTCHA; formal name availability is requested in writing.', 'direct', 'manual_review_required'],
        'SOS-006': ['Nebraska Secretary of State', 'Name Procedures', 'https://sos.nebraska.gov/business-services/name-procedures'],
        'DOR-001': ['Nebraska Department of Revenue', 'Register Your New Business Online', 'https://revenue.nebraska.gov/businesses/register-your-new-business-online'],
        'DOR-002': ['Nebraska Department of Revenue', 'Starting a Business in Nebraska', 'https://revenue.nebraska.gov/businesses/starting-business-nebraska'],
        'DOL-001': ['Nebraska Department of Labor', 'Employer Resources', 'https://dol.nebraska.gov/UIBenefits/EmployerResources/NEworksEmployerResources', 'Agency specifies UI tax account application in NEworks.', 'direct', 'reachable'],
        'DOL-002': ['Nebraska Department of Labor', 'NEworks', 'https://neworks.nebraska.gov/', 'Interactive account destination.', 'official_search_index', 'manual_review_required'],
        'DOL-003': ['Nebraska Department of Labor', 'UI Tax Application', 'https://dol.nebraska.gov/webdocs/getfile/898a0f75-8cbc-46f2-9120-abcae12d961a'],
        'DOL-004': ['Nebraska Department of Labor', 'Unemployment Tax Account Instructions', 'https://dol.nebraska.gov/uitax'],
        'LAW-001': ['Nebraska Legislature', 'Revised Statute 21-192: LLC fees', 'https://nebraskalegislature.gov/laws/statutes.php?statute=21-192'],
        'LAW-002': ['Nebraska Legislature', 'Revised Statute 21-125: LLC biennial report', 'https://nebraskalegislature.gov/laws/statutes.php?statute=21-125'],
        'LAW-003': ['Nebraska Legislature', 'Revised Statute 87-210: trade-name registration', 'https://nebraskalegislature.gov/laws/statutes.php?statute=87-210'],
        'LAW-004': ['Nebraska Legislature', 'Revised Statute 21-113: LLC office and agent', 'https://nebraskalegislature.gov/laws/statutes.php?statute=21-113'],
        'WCC-001': ['Nebraska Workers Compensation Court', 'Employer FAQ', 'https://www.newcc.gov/employers/employer-frequently-asked-questions']
      }, {
        filing_authority: ['SOS-001', 'The SOS startup guidance distinguishes entity filings; confirm domestic versus foreign structure.'],
        official_business_portal: ['SOS-004', 'Use the SOS document eDelivery service to select forming a new entity, qualifying a foreign entity, registering a trade name or filing for an existing entity; upload the selected document. The announced replacement filing system is scheduled for December 2026.', 'VERIFIED', ['SOS-002']],
        name_search: ['SOS-005', 'Use the public search for registered records, but request a formal name-availability check in writing from the SOS at sos.corp@nebraska.gov, by fax or by mail. The public search alone does not determine availability.', 'VERIFIED', ['SOS-006']],
        state_registration: ['SOS-002', 'A Nebraska domestic LLC files a Certificate of Organization; a foreign LLC applies for a Certificate of Authority. The SOS lists $100 online or $110 in office for either filing and a $10 certificate charge for the foreign authority; statute 21-192 also specifies $10 for a certificate. Select the listed form and submit it through document eDelivery.', 'VERIFIED', ['LAW-001', 'SOS-004']],
        tax_authority: ['DOR-002', 'The Department of Revenue lists the state tax accounts that may apply to a new business.'],
        tax_registration: ['DOR-001', 'Use the Department of Revenue online new-business registration for applicable tax accounts.'],
        licenses_permits: ['SOS-001', 'Identify regulated activities and local permits separately; the statewide general-license conclusion is unverified.', 'unresolved/research-required'],
        employer_registration: ['DOL-003', 'General employer UI liability includes $1,500 or more gross wages in a calendar quarter or at least one worker for a portion of a day in 20 different weeks; household, agricultural, nonprofit, government, transfer and out-of-state employers have distinct rules. Use the agency application to determine liability.'],
        unemployment_insurance: ['DOL-004', 'The Department of Labor directs UI tax account setup, wage reports and payments through NEworks; start with its Establishing Your NDOL Tax Account instructions. Special employer categories use the agency application for a liability determination.'],
        workers_compensation: ['WCC-001', 'Nebraska employers subject to the Act obtain coverage from a licensed insurer or receive authorization to self-insure; assess exceptions.'],
        ongoing_reporting: ['LAW-002', 'Domestic and authorized foreign LLCs file a biennial report between January 1 and April 1 in odd-numbered years, beginning in the odd year after formation or authority. The general LLC filing fee is $25 electronically or $30 in writing under section 21-192.', 'VERIFIED', ['LAW-001']],
        registered_agent: ['LAW-004', 'A Nebraska LLC continuously maintains an in-state office and an agent for service of process; a foreign LLC with authority maintains an in-state agent. The agent must be a Nebraska resident individual or a person authorized to transact business in Nebraska.'],
        trade_name: ['LAW-003', 'A person adopting a Nebraska trade name may register it with the SOS; the statutory application fee is $100 electronically or $110 in writing. Review the form for the proposed name and applicant.']
      }, ['Confirm any registration timing or special UI category that the agency application does not explain.', 'Verify activity-specific licenses for the proposed business.', 'Complete a genuine mobile-width visual and keyboard review.']),
      { state: "Nevada", state_code: "NV", slug: "nevada", publication_status: "coming_soon", public_url: "" },
      { state: "New Hampshire", state_code: "NH", slug: "new-hampshire", publication_status: "coming_soon", public_url: "" },
      { state: "New Jersey", state_code: "NJ", slug: "new-jersey", publication_status: "coming_soon", public_url: "" },
      stagedState('New Mexico', 'NM', 'new-mexico', {
        'SOS-001': ['New Mexico Secretary of State', 'Business Services', 'https://www.sos.nm.gov/business-services/'],
        'SOS-002': ['New Mexico Secretary of State', 'Enterprise Business Portal', 'https://enterprise.sos.nm.gov/', 'Interactive online-only forms.', 'official_search_index', 'manual_review_required'],
        'SOS-003': ['New Mexico Secretary of State', 'Enterprise Business Forms', 'https://enterprise.sos.nm.gov/forms/business/', 'Current public form descriptions display a $50 nonrefundable fee for Domestic LLC Articles of Organization and $100 for Foreign LLC Certificate of Registration; filing itself requires login.', 'direct', 'reachable', '2026-10-14'],
        'TRD-001': ['New Mexico Taxation and Revenue Department', 'Who Must Register a Business?', 'https://www.tax.newmexico.gov/businesses/who-must-register-a-business/'],
        'TRD-002': ['New Mexico Taxation and Revenue Department', 'Online Services', 'https://www.tax.newmexico.gov/online-services/'],
        'DWS-001': ['New Mexico Department of Workforce Solutions', 'UI Tax Information', 'https://www.dws.state.nm.us/UI-Tax-Information', 'Agency blocks automated content review; employer account route needs manual confirmation.', 'official_search_index', 'access_blocked'],
        'DWS-002': ['New Mexico Department of Workforce Solutions', 'Employer UI Tax Registration', 'https://ui.dws.state.nm.us/Employer/Core/Navigate.aspx?Go=Revenue.Registration.EmployerRegistration', 'Agency registration destination; an account is required for submission.', 'official_search_index', 'manual_review_required'],
        'WCA-002': ['New Mexico Workers Compensation Administration', 'Frequently Asked Questions', 'https://www.workerscomp.nm.gov/faqs/'],
        'WCA-001': ['New Mexico Workers Compensation Administration', 'Employer Compliance', 'https://www.workerscomp.nm.gov/bureaus/employer-compliance/'],
        'SOS-004': ['New Mexico Secretary of State', 'Business Search', 'https://enterprise.sos.nm.gov/business-search', 'Interactive search; SOS filing guide describes the name/Business ID lookup.', 'official_search_index', 'manual_review_required'],
        'SOS-005': ['New Mexico Secretary of State', 'Business Online Filing Help (December 2024)', 'https://www.sos.nm.gov/business-services/user-guides/', 'SOS user-guide page links the official filing manual; form-specific fees appear in Enterprise descriptions.', 'direct', 'reachable'],
        'RULE-001': ['New Mexico State Records Center and Archives', '12.3.4.11–12 NMAC, LLC filings and agents', 'https://www.srca.nm.gov/parts/title12/12.003.0004.html', 'Official administrative rule identifies domestic articles, foreign registration and registered agent/office; legacy references to the commission do not override current SOS online process.', 'direct', 'reachable'],
        'SOS-006': ['New Mexico Secretary of State', 'Business resources and fictitious-name form', 'https://www.sos.nm.gov/business-services/resources/', 'Linked fictitious-name PDF is a corporation resolution for an unavailable corporate name; it is not a general LLC DBA application.', 'direct', 'reachable'],
        'LAW-001': ['New Mexico Legislature', '2021 Chapter 68, sections 7–8 (53-19-3 and 53-19-11 NMSA)', 'https://www.nmlegis.gov/Sessions/21%20Regular/final/SB0202.PDF', 'Signed law effective July 1, 2021: domestic LLC articles state a different name proposed for New Mexico business; amendment articles include it.', 'direct', 'reachable', '2026-10-14'],
        'LAW-002': ['New Mexico Legislature', '2003 final SB 379, section 54 (53-19-48 NMSA)', 'https://www.nmlegis.gov/Sessions/03%20Regular/FinalVersions/SB0379.pdf', 'Foreign LLC registration application states its name and, if different, the name proposed for New Mexico business; the old paper/commission mechanics do not describe current Enterprise filing.', 'direct', 'reachable', '2026-10-14']
      }, {
        filing_authority: ['SOS-001', 'The SOS now requires online business filings; paper business applications are no longer accepted.'],
        official_business_portal: ['SOS-005', 'In SOS Enterprise, sign in, choose Forms, then Business and the entity type, and select File Online. Upload the required registered-agent acceptance PDF; the form description displays its filing fee and the My Business Work Queue tracks review.'],
        name_search: ['SOS-005', 'Use the Enterprise Business Search to inspect the proposed entity name or Business ID; the agency evaluates the actual application after submission.', 'VERIFIED', ['SOS-004']],
        state_registration: ['SOS-003', 'A domestic LLC files Articles of Organization ($50 nonrefundable application fee); a foreign LLC files a Certificate of Registration ($100 nonrefundable application fee) before transacting business. These amounts appear in the current public Enterprise form descriptions; review the selected form before payment.', 'VERIFIED', ['RULE-001', 'SOS-005']],
        tax_authority: ['TRD-001', 'Businesses meeting New Mexico registration criteria must obtain a Business Tax Identification Number; check tax types and applicability.'],
        tax_registration: ['TRD-002', 'Use the Taxation and Revenue online services for applicable business tax registration; the Business Tax ID application is free.'],
        licenses_permits: ['SOS-001', 'Check professional, activity and local permits; statewide general-license applicability has not been conclusively verified.', 'unresolved/research-required'],
        employer_registration: ['DWS-001', 'Determine unemployment tax liability and registration with the Department of Workforce Solutions.'],
        unemployment_insurance: ['DWS-002', 'New employers subject to UI tax register through the DWS Unemployment Insurance Tax Self-Service System. The official employer registration page creates an Employer Account Number; determine liability and any special category using agency instructions.'],
        workers_compensation: ['WCA-002', 'Coverage generally applies at three or more workers and to licensed construction activities regardless of headcount. The WCA counts part-time, seasonal and paid family workers; executive owners may elect exclusion from their own coverage but still count toward the three-worker threshold. Confirm the entity and activity-specific exceptions.'],
        ongoing_reporting: ['SOS-003', 'Check entity-specific ongoing reports and deadlines in the current online forms; do not assume a universal LLC annual report.', 'unresolved/research-required'],
        registered_agent: ['RULE-001', 'Domestic and foreign LLCs continuously maintain a New Mexico registered agent and office; upload the agent Statement of Acceptance PDF with the Enterprise application.', 'VERIFIED', ['SOS-005']],
        trade_name: ['LAW-001', 'A domestic LLC proposing to transact business under a different name states that name in its articles of organization; articles of amendment include the different name. The foreign LLC registration statute likewise asks for a different proposed New Mexico business name. Confirm with the SOS whether another LLC fictitious-name filing applies and how the current Enterprise forms handle the proposed use.', 'unresolved/research-required', ['LAW-002', 'SOS-006']]
      }, ['Confirm whether a domestic or foreign LLC has any recurring SOS report and its deadline.', 'Confirm whether an LLC using another name needs a separate fictitious-name filing and the current Enterprise procedure for domestic and foreign LLCs.', 'Confirm any remaining workers-compensation exception for the proposed activity.', 'Verify activity-specific licenses and any account-only tax step essential to the proposed business.', 'Complete a genuine mobile-width visual and keyboard review.'], '2026-10-14'),
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
            "title": "Register for Unemployment Tax",
            "url": "https://www.twc.texas.gov/services/register-tax",
            "last_checked": "2026-10-13",
            "evidence_method": "official_search_index",
            "evidence_note": "Current agency page and its unemployment-tax program instructions identify registration within ten days of liability; account submission remains interactive.",
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
          "Confirm any account-only TWC step needed by the specific employer category; the public registration rule and destination are verified from current agency instructions.",
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
          "url": "https://www.twc.texas.gov/services/register-tax",
          "source_id": "TX-TWC-001",
          "requirements": [
            {
              "text": "Register with TWC within ten days of becoming liable for unemployment tax. Use the agency's current tax-account registration page; the account application itself may require interactive steps.",
              "source_ids": [
                "TX-TWC-001"
              ],
              "status": "VERIFIED"
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
