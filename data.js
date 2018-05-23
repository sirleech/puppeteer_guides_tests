// the site data
module.exports = {
  getsitedata: function() {
    var data;
    return (
      data = 
      {
        pages: [

// Homepage, auxillary pages
{ name: "index", path: "/" },
{ name: "sitemap", path: "/sitemap/" },
{ name: "privacystatement", path: "/privacy-statement/" },

// Digital Service standard

{ name: "dss00", path: "/digital-service-standard/" },
{ name: "dss01", path: "/digital-service-standard/1-understand-user-needs/" },
{ name: "dss02", path: "/digital-service-standard/2-multidisciplinary-team/" },
{ name: "dss03", path: "/digital-service-standard/3-agile-and-user-centred/" },
{ name: "dss04", path: "/digital-service-standard/4-tools-and-systems/" },
{ name: "dss05", path: "/digital-service-standard/5-make-it-secure/" },
{ name: "dss06", path: "/digital-service-standard/6-consistent-and-responsive/" },
{ name: "dss07", path: "/digital-service-standard/7-open-standards-and-common-platforms/" },
{ name: "dss08", path: "/digital-service-standard/8-make-source-code-open/" },
{ name: "dss09", path: "/digital-service-standard/9-make-it-accessible/" },
{ name: "dss10", path: "/digital-service-standard/10-test-the-service/" },
{ name: "dss11", path: "/digital-service-standard/11-measure-performance/" },
{ name: "dss12", path: "/digital-service-standard/12-non-digital-experience/" },
{ name: "dss13", path: "/digital-service-standard/13-encourage-use-of-the-digital-service/" },

// Topics page
{ name: "topics", path: "/topics/" },

// Service design delivery process

{ name: "sdd01", path: "/topics/service-design-delivery-process/" },
{ name: "sdd02", path: "/topics/service-design-delivery-process/get-started/" },
{ name: "sdd03", path: "/topics/service-design-delivery-process/whole-user-experience/" },
{ name: "sdd04", path: "/topics/service-design-delivery-process/discovery-stage/" },
{ name: "sdd05", path: "/topics/service-design-delivery-process/alpha-stage/" },
{ name: "sdd06", path: "/topics/service-design-delivery-process/beta-stage/" },
{ name: "sdd07", path: "/topics/service-design-delivery-process/live-stage/" },

// Starting a team

{ name: "team01", path: "/topics/starting-team/" },
{ name: "team02", path: "/topics/starting-team/roles/" },
{ name: "team03", path: "/topics/starting-team/multidisciplinary-team/" },
{ name: "team04", path: "/topics/starting-team/digital-capability-team/" },

// User Research
{ name: "ur01", path: "/topics/user-research/" },
{ name: "ur02", path: "/topics/user-research/identifying-users-needs/" },
{ name: "ur03", path: "/topics/user-research/getting-support/" },
{ name: "ur04", path: "/topics/user-research/team-research/" },
{ name: "ur05", path: "/topics/user-research/planning-user-research/" },
{ name: "ur06", path: "/topics/user-research/planning-user-research/using-existing-research-data/" },
{ name: "ur07", path: "/topics/user-research/research-stages/" },
{ name: "ur08", path: "/topics/user-research/find-user-research-participants/" },
{ name: "ur09", path: "/topics/user-research/interviewing-users/" },
{ name: "ur10", path: "/topics/user-research/consent-forms/" },
{ name: "ur11", path: "/topics/user-research/paying-incentives/" },
{ name: "ur12", path: "/topics/user-research/analysing-user-research/" },
{ name: "ur13", path: "/topics/user-research/understanding-diversity/" },

// Content Strategy Guide
{ name: "cs01", path: "/content-strategy/" },
{ name: "cs02", path: "/content-strategy/understand-channel-ecosystem/" },
{ name: "cs03", path: "/content-strategy/understand-channel-ecosystem/content-discovery/" },
{ name: "cs04", path: "/content-strategy/understand-channel-ecosystem/show-content-ecosystem/" },
{ name: "cs05", path: "/content-strategy/start-content-strategy/" },
{ name: "cs06", path: "/content-strategy/start-content-strategy/senior-executive-buy-in/" },
{ name: "cs07", path: "/content-strategy/start-content-strategy/show-problem-evidence/" },
{ name: "cs08", path: "/content-strategy/start-content-strategy/show-problem-evidence/content-strategy-template/" },
{ name: "cs09", path: "/content-strategy/start-content-strategy/tips-pitching-case/" },
{ name: "cs10", path: "/content-strategy/identify-business-needs/" },
{ name: "cs11", path: "/content-strategy/identify-business-needs/who-to-talk/" },
{ name: "cs12", path: "/content-strategy/identify-business-needs/who-to-talk/business-alignment-workshop/" },
{ name: "cs13", path: "/content-strategy/identify-business-needs/what-business-needs/" },
{ name: "cs14", path: "/content-strategy/identify-business-needs/getting-agreement/" },
{ name: "cs15", path: "/content-strategy/define-user-content-needs/" },
{ name: "cs16", path: "/content-strategy/define-user-content-needs/create-actionable-artefacts/" },
{ name: "cs17", path: "/content-strategy/define-user-content-needs/create-actionable-artefacts/user-profiles/" },
{ name: "cs18", path: "/content-strategy/define-user-content-needs/create-actionable-artefacts/journey-maps/" },
{ name: "cs19", path: "/content-strategy/define-user-content-needs/create-actionable-artefacts/top-tasks/" },
{ name: "cs20", path: "/content-strategy/define-user-content-needs/create-actionable-artefacts/user-job-stories/" },
{ name: "cs21", path: "/content-strategy/audit-content/" },
{ name: "cs22", path: "/content-strategy/audit-content/prove-value/" },
{ name: "cs23", path: "/content-strategy/audit-content/plan-your-audit/" },
{ name: "cs24", path: "/content-strategy/audit-content/engage-stakeholders/" },
{ name: "cs25", path: "/content-strategy/audit-content/conduct-audit/" },
{ name: "cs26", path: "/content-strategy/audit-content/analyse-evaluate/" },
{ name: "cs27", path: "/content-strategy/audit-content/analyse-evaluate/content-evaluation-checklist/" },
{ name: "cs28", path: "/content-strategy/audit-content/action-audit/" },
{ name: "cs29", path: "/content-strategy/set-goals-measure-success/" },
{ name: "cs30", path: "/content-strategy/set-goals-measure-success/glossary-measurement-definitions/" },
{ name: "cs31", path: "/content-strategy/set-goals-measure-success/goals-objectives-kpis/" },
{ name: "cs32", path: "/content-strategy/set-goals-measure-success/measure-success/" },
{ name: "cs33", path: "/content-strategy/set-goals-measure-success/report-findings/" },
{ name: "cs34", path: "/content-strategy/set-up-governance/" },
{ name: "cs35", path: "/content-strategy/set-up-governance/improve-content-maturity/" },
{ name: "cs36", path: "/content-strategy/set-up-governance/apply-content-governance-model/" },
{ name: "cs37", path: "/content-strategy/set-up-governance/accountability-ownership/" },
{ name: "cs38", path: "/content-strategy/set-up-governance/accountability-ownership/design-workflow/" },
{ name: "cs39", path: "/content-strategy/set-up-governance/accountability-ownership/identify-tasks-skills/" },
{ name: "cs40", path: "/content-strategy/set-up-governance/endorse-standards-guidelines/" },
{ name: "cs41", path: "/content-strategy/set-up-governance/endorse-standards-guidelines/guidelines-standards-checklist/" },
{ name: "cs42", path: "/content-strategy/remove-content/" },
{ name: "cs43", path: "/content-strategy/remove-content/get-approval-remove/" },
{ name: "cs44", path: "/content-strategy/remove-content/create-removal-plan/" },
{ name: "cs45", path: "/content-strategy/remove-content/archive-record-content/" },
{ name: "cs46", path: "/content-strategy/remove-content/remove-content-from-web/" },
{ name: "cs47", path: "/content-strategy/remove-content/decommission-website/" },
{ name: "cs48", path: "/content-strategy/manage-content-requests/" },
{ name: "cs49", path: "/content-strategy/manage-content-requests/plan-content/" },
{ name: "cs50", path: "/content-strategy/manage-content-requests/plan-content/content-planning-workshop/" },
{ name: "cs51", path: "/content-strategy/manage-content-requests/create-content/" },
{ name: "cs52", path: "/content-strategy/manage-content-requests/create-content/content-production-template/" },
{ name: "cs53", path: "/content-strategy/manage-content-requests/create-content/content-decision-tree/" },
{ name: "cs54", path: "/content-strategy/manage-content-requests/create-content/pair-writing/" },
{ name: "cs55", path: "/content-strategy/manage-content-requests/check-revise-content/" },
{ name: "cs56", path: "/content-strategy/manage-content-requests/sign-off-content/" },
{ name: "cs57", path: "/content-strategy/manage-content-requests/sign-off-content/sign-off-template/" },
{ name: "cs58", path: "/content-strategy/manage-content-requests/publish-content/" },
{ name: "cs59", path: "/content-strategy/manage-content-requests/maintain-improve-content/" },
{ name: "cs60", path: "/content-strategy/manage-content-requests/maintain-improve-content/maintain-plan/" },
{ name: "cs61", path: "/content-strategy/manage-content-requests/maintain-improve-content/maintain-checklist/" },
{ name: "cs62", path: "/content-strategy/urgent-content-requests/" },
{ name: "cs63", path: "/content-strategy/urgent-content-requests/fixed-deadlines/" },
{ name: "cs64", path: "/content-strategy/urgent-content-requests/fixed-deadlines/published-content-issues-register/" },
{ name: "cs65", path: "/content-strategy/urgent-content-requests/important-non-urgent-requests/" },
{ name: "cs66", path: "/content-strategy/urgent-content-requests/prepare-urgent-request/" },

        ]
      }
    )
  }
};

