import { Helmet } from "react-helmet";

const H2 = "text-3xl font-semibold mb-4 text-purple-500";
const H3 = "text-xl font-semibold mb-3 mt-8 dark:text-white";
const P = "dark:text-gray-300 text-justify mb-4";
const UL = "list-disc pl-6 space-y-3 mb-4 dark:text-gray-300 text-justify";

const SECTIONS = [
  { id: "section-1", title: "1. Introduction and Compliance Commitment" },
  { id: "section-2", title: "2. Scope and Digital Touchpoints" },
  { id: "section-3", title: "3. Categories of Data We Collect" },
  { id: "section-4", title: "4. Statutory Lawful Grounds for Processing" },
  { id: "section-5", title: "5. Website Cookies Policy" },
  { id: "section-6", title: "6. International Data Transfers & Third-Party Integrations" },
  { id: "section-7", title: "7. Special Safeguards for Minors' Data" },
  { id: "section-8", title: "8. Data Subject Rights & Procedures" },
  { id: "section-9", title: "9. Security and Data Retention" },
  { id: "section-10", title: "10. Revision Control & Contact Info" },
];

const COOKIE_ROWS = [
  {
    category: "Strictly Necessary Cookies",
    lifespan: "Session",
    description:
      "Essential for core site operations. They enable secure logins, prevent application form forgery, and remember inputs as you navigate between application pages.",
  },
  {
    category: "Analytical / Performance",
    lifespan: "Up to 1 Year",
    description:
      "Help us count visits, identify popular educational modules, and track bounce rates via anonymized metrics (e.g., Google Analytics) to improve the website layout.",
  },
  {
    category: "Social & Platform Cookies",
    lifespan: "30 Days",
    description:
      "Embedded to support interactive features, such as displaying our active community X (Twitter) feeds or embedding open-source repositories from GitHub directly on the site.",
  },
];

const META_ROWS = [
  ["Document Title", "Website Privacy Notice & Cookies Policy"],
  ["Version Compliance", "NDPA 2023 Compliant"],
  ["Effective Date", "August 26, 2026"],
  ["Publishing Medium", "Public Website (https://blockfuselabs.com)"],
  ["Target Audience", "Website Visitors, Applicants, Newsletter Subscribers, and Contributors"],
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Blockfuse Labs - Privacy Notice & Cookies Policy</title>
        <meta
          name="description"
          content="How Blockfuse Labs collects, uses, and safeguards personal data submitted through our website, cohort application portals, and developer newsletters. Drafted in conformity with the Nigeria Data Protection Act (NDPA) 2023."
        />
        <meta property="og:title" content="Blockfuse Labs Privacy Notice & Cookies Policy" />
        <meta
          property="og:description"
          content="Our public-facing Privacy Notice and Cookies Policy, aligned with the Nigeria Data Protection Act (NDPA) 2023."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="px-6 h-auto py-36 dark:text-white sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <p className="text-sm uppercase tracking-widest text-purple-500 mb-3">
              Blockfuse Labs
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold dark:text-white mb-8">
              Public Website Privacy Notice &amp; Cookies Policy
            </h1>

            <dl className="border-l-2 border-purple-500/60 pl-5 space-y-2">
              {META_ROWS.map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="font-semibold dark:text-white whitespace-nowrap">
                    {label}:
                  </dt>
                  <dd className="dark:text-gray-300">
                    {label === "Publishing Medium" ? (
                      <>
                        Public Website (
                        <a
                          href="https://blockfuselabs.com"
                          className="text-purple-500 hover:text-purple-400 underline"
                        >
                          https://blockfuselabs.com
                        </a>
                        )
                      </>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </header>

          <p className={P}>
            This Privacy Notice and Cookies Policy governs how Blockfuse Labs collects, uses,
            and safeguards information processed through our public web interface, program
            application portals, developer newsletters, and digital communities.
          </p>

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="my-12">
            <h2 className="text-lg font-semibold uppercase tracking-wide dark:text-white mb-4">
              Table of Contents
            </h2>
            <ol className="space-y-2">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-14">
            {/* 1 */}
            <section id="section-1" className="scroll-mt-28">
              <h2 className={H2}>1. Introduction and Compliance Commitment</h2>
              <p className={P}>
                Blockfuse Labs, based in Jos, Plateau State, Nigeria, is a premier technology
                education, research, and development organization. We are deeply committed to
                protecting the privacy of our students, application candidates, open-source
                contributors, community members, and website visitors. In keeping with our
                objective to foster a positive, legally robust privacy culture across our offline
                programs and digital platforms, this public-facing Privacy Notice has been
                drafted in complete conformity with the Nigeria Data Protection Act (NDPA) 2023.
              </p>
              <p className={P}>
                This policy modernizes and replaces all obsolete data privacy frameworks
                previously operating under the National Information Technology Development Agency
                (NITDA) guidelines or the Nigeria Data Protection Regulation (NDPR) 2019. It
                reflects the regulatory and supervisory oversight of the newly established Nigeria
                Data Protection Commission (NDPC). This Notice explains transparently how
                Blockfuse Labs acts as a Data Controller for your website-submitted data, what
                information we collect, the lawful grounds for our processing, our cookies usage,
                and how you can exercise your statutory rights.
              </p>
            </section>

            {/* 2 */}
            <section id="section-2" className="scroll-mt-28">
              <h2 className={H2}>2. Scope and Digital Touchpoints</h2>
              <p className={P}>
                This Privacy Notice applies to all external users who interact with Blockfuse Labs
                online. Specifically, it regulates personal data processed across our designated
                digital footprints, including:
              </p>
              <ul className={UL}>
                <li>
                  <span className="font-semibold dark:text-white">The Main Website:</span>{" "}
                  Browsing, interacting with form fields, and accessing developer resources on{" "}
                  <a
                    href="https://blockfuselabs.com"
                    className="text-purple-500 hover:text-purple-400 underline"
                  >
                    https://blockfuselabs.com
                  </a>
                  .
                </li>
                <li>
                  <span className="font-semibold dark:text-white">
                    Application and Registration Portals:
                  </span>{" "}
                  The submission of candidate data for our Software Engineering (Web2) and
                  Blockchain/Web3 Engineering cohorts, hackathons, and buildathons.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">
                    Community and Content Delivery Platforms:
                  </span>{" "}
                  Newsletter subscription modules, contact forms, and integrated developer
                  environments used during training cohorts (e.g., HackMD learning logs and
                  collaborative tools).
                </li>
                <li>
                  <span className="font-semibold dark:text-white">Media &amp; Photographic Logs:</span>{" "}
                  The publication of event photographs, video highlights, and testimonials on our
                  digital pages.
                </li>
              </ul>
              <p className={P}>
                <span className="font-semibold dark:text-white">Note on Startup Incubation:</span>{" "}
                Where Blockfuse Labs incubates student developer teams or assists in MVP testing,
                those teams may eventually launch standalone products. Once a product or startup
                operates independently, it acts as a separate Data Controller and is solely
                responsible for its own users' privacy compliance. This Notice does not govern
                independent, student-run systems.
              </p>
            </section>

            {/* 3 */}
            <section id="section-3" className="scroll-mt-28">
              <h2 className={H2}>3. Categories of Data We Collect</h2>
              <p className={P}>
                We limit our data collection to what is relevant, adequate, and strictly necessary
                for your participation in our programs and events. We collect data through two
                primary methods: direct user submissions and automated technical logs.
              </p>

              <h3 className={H3}>3.1 Direct Submissions by Users</h3>
              <p className={P}>
                When you apply for our educational cohorts, register for hackathons, or subscribe
                to our newsletter, you directly submit personal data to Blockfuse Labs. This data
                includes:
              </p>
              <ul className={UL}>
                <li>
                  <span className="font-semibold dark:text-white">Identity &amp; Contact Details:</span>{" "}
                  Your full name, email address, telephone number, geographic location/country,
                  age range, and gender (where requested for ecosystem demographic reporting).
                </li>
                <li>
                  <span className="font-semibold dark:text-white">
                    Professional &amp; Academic Profiles:
                  </span>{" "}
                  Your educational background, current professional status, technical skill
                  levels, and portfolio links.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">Developer Coordinates:</span>{" "}
                  Your GitHub profile link, social media handles (e.g., X/Twitter, LinkedIn), and
                  references to prior software contributions.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">Admissions Data:</span> Answers
                  to essay questions, project files, assessment submissions, and direct email
                  communications with our admissions team.
                </li>
              </ul>

              <h3 className={H3}>3.2 Technical, Open-Source, and Automated Logs</h3>
              <p className={P}>
                To diagnose technical faults, optimize website performance, secure our database,
                and maintain our active participation in global open-source developments, we
                process:
              </p>
              <ul className={UL}>
                <li>
                  <span className="font-semibold dark:text-white">Web and Diagnostic Logs:</span>{" "}
                  IP addresses, browser metadata, operating system configurations, device
                  identification parameters, and site-navigation patterns.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">Open-Source Contributor Data:</span>{" "}
                  For developers contributing to Blockfuse Labs' open-source research and
                  development (such as Gean, our Go implementation of the Lean Ethereum consensus
                  protocol), we process publicly accessible GitHub accounts, commit histories,
                  code pull-requests, and public cryptographic keys. This data is intentionally
                  public by design in blockchain development environments.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">Digital Cohort Logs:</span>{" "}
                  Access frequencies, shared notes, and collaborative work logs submitted on
                  multi-user platforms like HackMD.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section id="section-4" className="scroll-mt-28">
              <h2 className={H2}>4. Statutory Lawful Grounds for Processing</h2>
              <p className={P}>
                In accordance with Section 25 of the Nigeria Data Protection Act (NDPA) 2023,
                Blockfuse Labs does not process personal data without a valid, legally recognized
                lawful basis. Your data is processed under the following statutory grounds:
              </p>

              <h3 className={H3}>4.1 Consent of the Data Subject (NDPA Sec. 25(1)(a))</h3>
              <p className={P}>
                We rely on your explicit, freely given, specific, and affirmative consent when you
                voluntarily subscribe to our developer newsletter, opt in to website tracking
                cookies, or sign up to receive promotional information about upcoming hackathons.
                Consent can be withdrawn at any time through our automated 'Unsubscribe' links.
              </p>

              <h3 className={H3}>
                4.2 Contractual and Pre-Contractual Necessity (NDPA Sec. 25(1)(b))
              </h3>
              <p className={P}>
                When you submit an application to join our software cohorts, your data is
                processed to evaluate your application, conduct code assessments, and execute the
                admissions process. Once admitted, processing is necessary to administer our
                training syllabus, coordinate mentor reviews, record attendance, and award
                completion certificates.
              </p>

              <h3 className={H3}>4.3 Platform Legitimate Interests (NDPA Sec. 25(1)(f))</h3>
              <p className={P}>
                This ground covers activities necessary to protect Blockfuse Labs' digital
                security and maintain the integrity of our programs. It includes detecting and
                preventing fraudulent application registrations, logging technical errors,
                monitoring hacker attacks on our portals, and linking open-source code
                contributions to public GitHub profiles to prove technical milestone delivery to
                grant sponsors.
              </p>

              <h3 className={H3}>4.4 Legal Obligations (NDPA Sec. 25(1)(c))</h3>
              <p className={P}>
                We process and retain certain personal records to satisfy statutory regulatory
                mandates in Nigeria, such as filing mandatory annual data compliance audits with
                the Nigeria Data Protection Commission (NDPC) or responding to lawfully authorized
                requests from Nigerian law enforcement under the Cybercrimes Act.
              </p>
            </section>

            {/* 5 */}
            <section id="section-5" className="scroll-mt-28">
              <h2 className={H2}>5. Website Cookies Policy</h2>
              <p className={P}>
                Our website utilizes cookies and similar tracking technologies to improve your
                user experience, analyze site traffic, and secure our online portals. Cookies are
                small text files stored on your browser or device when you visit our platforms.
              </p>

              <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-purple-500/60">
                      <th className="py-3 pr-4 font-semibold dark:text-white align-bottom">
                        Cookie Category
                      </th>
                      <th className="py-3 pr-4 font-semibold dark:text-white align-bottom whitespace-nowrap">
                        Lifespan
                      </th>
                      <th className="py-3 font-semibold dark:text-white align-bottom">
                        Description &amp; Operational Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIE_ROWS.map((row) => (
                      <tr
                        key={row.category}
                        className="border-b border-gray-300 dark:border-gray-700 align-top"
                      >
                        <td className="py-4 pr-4 font-medium dark:text-white">{row.category}</td>
                        <td className="py-4 pr-4 dark:text-gray-300 whitespace-nowrap">
                          {row.lifespan}
                        </td>
                        <td className="py-4 dark:text-gray-300">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6 */}
            <section id="section-6" className="scroll-mt-28">
              <h2 className={H2}>
                6. International Data Transfers &amp; Third-Party Integrations
              </h2>
              <p className={P}>
                Because Blockfuse Labs collaborates with international blockchain organizations
                (such as the Ethereum Foundation, SuperteamNG, Base, and Lisk) and utilizes global
                technology platforms, your data may be processed on servers located outside
                Nigeria. This includes cloud storage, email servers, and collaborative tools
                (e.g., Google Workspace, Slack, HackMD, and GitHub repositories).
              </p>
              <p className={P}>
                To comply with Part VIII of the NDPA 2023, Blockfuse Labs ensures that
                cross-border data transfers are only conducted to jurisdictions with adequate data
                protection laws, or are protected by legally binding Standard Contractual Clauses
                (SCCs) signed with our international third-party cloud service providers. This
                guarantees that your privacy is maintained at the same high standard required
                within Nigeria, bypassing obsolete whitelisting models.
              </p>
            </section>

            {/* 7 */}
            <section id="section-7" className="scroll-mt-28">
              <h2 className={H2}>7. Special Safeguards for Minors' Data</h2>
              <p className={P}>
                Blockfuse Labs actively promotes technology education among the youth through
                special workshops and STEM camps in Plateau State. Under Section 31 of the NDPA
                2023, children (persons under the age of 18) require strict parental or guardian
                consent before any personal data is processed.
              </p>
              <p className={P}>
                We enforce a zero-tolerance policy for direct collection of minor data on our
                public site. For our youth training programs, registration and application forms
                must be completed directly by a parent or legal guardian, who must explicitly
                grant verifiable written consent. We apply advanced security controls, such as
                restricted database access, to minor records and obtain separate media consent
                before publishing cohort group photos.
              </p>
            </section>

            {/* 8 */}
            <section id="section-8" className="scroll-mt-28">
              <h2 className={H2}>8. Data Subject Rights &amp; Procedures</h2>
              <p className={P}>
                Under the NDPA 2023, website visitors, newsletter subscribers, and cohort
                applicants hold comprehensive statutory rights. You have the right to:
              </p>
              <ul className={UL}>
                <li>
                  <span className="font-semibold dark:text-white">
                    Right of Confirmation &amp; Access:
                  </span>{" "}
                  Confirm if we process your data and receive a copy of your admissions,
                  registration, and newsletter records in a clear, digital format.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">Right to Rectification:</span>{" "}
                  Request immediate correction of inaccurate or outdated contact information,
                  GitHub profiles, or location coordinates.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">
                    Right to Erasure (To be Forgotten):
                  </span>{" "}
                  Request deletion of your application history, newsletter subscriptions, or
                  online forum posts. Some data, such as completed cohort certifications, may be
                  preserved in an anonymized archive for historical records.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">Right to Object &amp; Opt-Out:</span>{" "}
                  Instantly stop receiving marketing campaigns, ecosystem bulletins, or
                  promotional emails by clicking 'Unsubscribe'.
                </li>
                <li>
                  <span className="font-semibold dark:text-white">Right to Withdraw Consent:</span>{" "}
                  Withdraw your consent for cookies tracking or newsletter distribution at any
                  time without negative consequences.
                </li>
              </ul>

              <h3 className={H3}>8.1 Subject Access Request (SAR) Workflow</h3>
              <p className={P}>
                To exercise any of your rights, you must complete our online SAR Form or submit a
                direct email to{" "}
                <a
                  href="mailto:privacy@blockfuselabs.com"
                  className="text-purple-500 hover:text-purple-400 underline"
                >
                  privacy@blockfuselabs.com
                </a>
                . Blockfuse Labs will verify your identity before processing the request to
                prevent data leakage. In accordance with the NDPA 2023, we will respond to your
                request within a maximum of thirty (30) calendar days from receipt, free of
                charge, except where the request is demonstrably excessive or repetitive.
              </p>
            </section>

            {/* 9 */}
            <section id="section-9" className="scroll-mt-28">
              <h2 className={H2}>9. Security and Data Retention</h2>
              <p className={P}>
                <span className="font-semibold dark:text-white">Data Security:</span> We implement
                rigorous technical and organizational controls to protect website and form
                submissions. All web traffic to our domains is protected by SSL/TLS encryption in
                transit. Workstations used by our admissions and support staff are fully
                encrypted at rest, and admin database access is restricted using multi-factor
                authentication (MFA) and role-based permissions.
              </p>
              <p className={P}>
                <span className="font-semibold dark:text-white">Data Retention:</span> We do not
                retain your personal data longer than necessary for the purpose it was collected.
                Newsletter subscriber details are retained until you opt out. Unsuccessful cohort
                application records are purged within twelve (12) months of cohort selection.
                Admitted student files and completed certificates are archived securely to
                support ongoing verification requests from alumni and prospective employers.
              </p>
            </section>

            {/* 10 */}
            <section id="section-10" className="scroll-mt-28">
              <h2 className={H2}>10. Revision Control &amp; Contact Info</h2>
              <p className={P}>
                This policy is reviewed annually or whenever our technological stack undergoes
                major upgrades. Feedback or questions about this Notice can be directed to:
              </p>

              <address className="not-italic border-l-2 border-purple-500/60 pl-5 mb-8 dark:text-gray-300">
                <span className="block font-semibold dark:text-white">
                  Data Protection Officer (DPO)
                </span>
                <span className="block">Blockfuse Labs, Jos, Plateau State, Nigeria</span>
                <span className="block">
                  Email:{" "}
                  <a
                    href="mailto:privacy@blockfuselabs.com"
                    className="text-purple-500 hover:text-purple-400 underline"
                  >
                    privacy@blockfuselabs.com
                  </a>
                </span>
              </address>

              <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-purple-500/60">
                      <th className="py-3 pr-4 font-semibold dark:text-white align-bottom">
                        Version
                      </th>
                      <th className="py-3 pr-4 font-semibold dark:text-white align-bottom whitespace-nowrap">
                        Last Updated
                      </th>
                      <th className="py-3 pr-4 font-semibold dark:text-white align-bottom">
                        Approver
                      </th>
                      <th className="py-3 font-semibold dark:text-white align-bottom">
                        Reason for Amendment / Scope
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700 align-top">
                      <td className="py-4 pr-4 font-medium dark:text-white">1.0</td>
                      <td className="py-4 pr-4 dark:text-gray-300 whitespace-nowrap">
                        August 26, 2026
                      </td>
                      <td className="py-4 pr-4 dark:text-gray-300">Board of Directors</td>
                      <td className="py-4 dark:text-gray-300">
                        Initial public release of Website Privacy Notice &amp; Cookies Policy;
                        NDPA 2023 aligned.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
