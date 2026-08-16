// ─────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// Add or edit a project by adding/editing an object in this array.
// The Projects section and Case Study modal render entirely from this file —
// you never need to touch component code to update your project content.
//
// Fields marked "PLACEHOLDER" are safe/expected to be empty until you fill
// them in. Everything else has been pre-filled from what you've told Claude
// about your actual work — double-check every number and insight before
// publishing, and replace anything that isn't accurate.
// ─────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'food-delivery-analytics',
    title: 'Egyptian Food Delivery Analytics',
    tagline:
      'End-to-end SQL Server + Power BI analysis of food delivery operations across 10 Egyptian cities.',
    businessProblem:
      'A food delivery platform needed visibility into order volume, restaurant performance, and delivery operations across its Egyptian city footprint, but the underlying data lived in disconnected relational tables with no reporting layer on top of it.',
    tools: ['SQL Server', 'Power BI', 'DAX', 'Power Query', 'Python'],  
    dataset: {source: 'Relational SQL Server database (8 linked tables)',
      records: '88K orders · 3K customers · 141 restaurants · 400 drivers across 10 Egyptian cities',
      columns: '+60 columns across 8 tables',
      mainTables:
        'Orders, Order_Items, Menu_Items, Restaurants, Customers, Drivers, and related dimension tables',
    },
    dataCleaning: [
      'Generated a fully synthetic but internally consistent dataset with Python\'s Faker library across 8 linked entities (customers, drivers, restaurants, menu items, orders, order items, payments, reviews) instead of starting from a messy raw source.',
      'Wrote a separate generation script per entity (generate_customers.py, generate_restaurants.py, generate_drivers.py, generate_menu_items.py, generate_orders.py, generate_order_items.py, generate_payments.py, generate_reviews.py) to keep foreign-key relationships and realistic value distributions intact across tables.',
      'Caught a city-data gap after the initial generation run and fixed it with two follow-up scripts (fix_missing_city_data.py, fix_missing_city_data2.py) rather than leaving invalid records in the dataset.',
      'Validated the generated data with a dedicated validate_data.py script before loading it — checking referential integrity and realistic ranges rather than assuming the generator produced clean output.',
    ],
    analysis: [
      'Ran an initial exploratory pass in Python (analysis.py) on the generated data to sanity-check distributions and relationships before committing it to a database.',
      'Loaded all 8 generated tables into SQL Server via a dedicated load_to_sql.py script using pyodbc.',
      'Moved the core analysis into SQL, writing 6 categorized query files — business, revenue, customer, restaurant, drivers, and menu/product analysis — to explore the data directly at the source.',
      'Exported key query results back out with export_results.py for use in the Power BI data model.',
    ],
    pythonHighlights: [
      'Used the Faker library to generate realistic, Egyptian-context data (customer profiles, driver details, restaurant and menu records, orders, payments, reviews) with controlled randomness instead of static placeholder rows.',
      'Built a dedicated load_to_sql.py script with pyodbc to move all 8 generated tables into SQL Server.',
      'Wrote a separate validate_data.py script to check the generated dataset for consistency before analysis began.',
    ],
    dashboardImages: [
      '/projects/food_delivery/executive_dashboard.png',
      '/projects/food_delivery/restaurant_performance.png',
      '/projects/food_delivery/customer_insights.png',
      '/projects/food_delivery/driver_performance.png',
    ],
    insights: [
      'Revenue is geographically concentrated: Giza alone generates $11.0M — more than the four smallest cities (Mansoura, Ismailia, Minya, Assiut) combined.',
      'A single restaurant, Gad in Giza, is the top revenue generator at $1.6M, ahead of national chains like Papa John\'s ($1.3M) and KFC ($1.1M).',
      'Payment method is well-balanced rather than concentrated on one channel: cash ($18M), card ($17M), and wallet ($13M) each carry a meaningful share of the $49M total.',
      'The driver fleet is motorcycle-heavy (229 of ~400 drivers), with 346 of 400 drivers (86.5%) currently active and an average driver rating of 4.38.',
      'Revenue rose sharply from 2024 to 2025 ($11.5M → $24.3M) before dropping to $13.1M in 2026 — likely reflecting a partial year rather than an actual decline, since 2026 is still in progress.',
    ],
    recommendations: [
      'Study what Giza and top-performing restaurants like Gad are doing differently, and apply those factors (menu mix, delivery radius, pricing) to underperforming cities like Minya and Assiut.',
      'Keep investing across all three payment methods rather than pushing customers toward one — the current balance suggests real customer preference diversity, not a channel that needs fixing.',
      'Investigate the on-leave/inactive driver segment (54 of 400) to understand whether it is capacity slack or a churn risk, especially in motorcycle-dependent cities.',
      'Re-run the 2025 vs 2026 revenue comparison once 2026 data is complete before concluding growth has slowed — right now the drop is very likely a partial-year artifact.',
    ],
    githubUrl: 'https://github.com/yousefwanass/Food_Delivery_Analytics', // PLACEHOLDER
    dashboardUrl: '', // PLACEHOLDER — Power BI publish-to-web link, if available
    caseStudyAvailable: true,
    featured: true,
  },
  {
    id: 'olist-ecommerce-analysis',
    title: 'Brazilian E-Commerce Analysis (Olist)',
    tagline:
      'Full analytics pipeline on a 117K-row e-commerce dataset — Power BI, Excel, and Google Sheets.',
    businessProblem:
      'Analyze a real-world, denormalized e-commerce dataset to surface revenue, customer, delivery, payment, and product-level patterns, and deliver the findings through parallel Power BI and Excel reporting deliverables.',
    dataset: {
      source: 'Olist Brazilian E-Commerce public dataset',
      records: '117,594 orders · 95,419 customers · 33K products across 74 categories',
      columns: 'PLACEHOLDER — add total column count',
      mainTables: 'Orders, order items, payments, customers, products, and reviews',
    },
    tools: ['Power BI', 'DAX', 'Excel', 'Google Sheets', 'Python', 'SQL Server'],
    dataCleaning: [
      'Cleaned raw data in Google Sheets using TRIM, PROPER, date corrections, and deduplication.',
      'Diagnosed a Google Sheets → Excel export bug where pivot-cache duplication caused Excel to silently drop pivot tables, and resolved it by rebuilding a clean native Excel workbook with Python/openpyxl.',
      'Found and fixed hardcoded KPI card values, incorrect formula row references, and a broken external link in the Excel workbook.',
    ],
    analysis: [
      'Built a _Measures table with 21 DAX measures across five display folders: Revenue & Profit, Orders & Customers, Delivery & Logistics, Payments, and Products.',
      'Designed five Power BI dashboard pages with slicers and page navigation.',
      'Built 6 pivot tables with charts and slicers in Google Sheets, then rebuilt the equivalent pivot tables, charts, slicers, a Timeline filter, and a Filled Map natively in Excel.',
      'Replaced hardcoded Excel KPI cards with GETPIVOTDATA formulas so they respond correctly to slicer selections.',
    ],
    sqlHighlights: [],
    pythonHighlights: [
      'Loaded all 9 Olist CSV tables (1.6M+ rows across the full relational set) into SQL Server via pyodbc, resolving a NULL-handling issue with fast_executemany by disabling it and casting numeric columns with pd.to_numeric.',
      'Used openpyxl to rebuild a clean native Excel workbook after diagnosing a pivot-cache export bug from Google Sheets.',
    ],
    dashboardImages: [
      '/projects/olist-ecommerce/executive-dashboard.png',
      '/projects/olist-ecommerce/sales-dashboard.png',
      '/projects/olist-ecommerce/customers-dashboard.png',
      '/projects/olist-ecommerce/products-dashboard.png',
      '/projects/olist-ecommerce/excel-executive-dashboard.png',
      '/projects/olist-ecommerce/excel-timeline-dashboard.png',
    ],
    insights: [
      'Revenue is concentrated at the top of the category list: informatica_acessorios alone generated $4.4M, ahead of moveis_decoracao ($3.6M) and cama_mesa_banho ($3.3M), out of 74 total categories.',
      'Payment method is heavily skewed toward one channel: credit card accounts for the large majority of orders (86,768), versus boleto (22,867), voucher (6,268), and debit card (1,691).',
      'Only 12.8% of customers are returning buyers — the business is running on a large base of one-time purchasers rather than repeat revenue.',
      'Delivery performance is inconsistent month to month: average delivery time swung between 9 and 16 days across the year against an overall average of 12 days.',
      'Total profit of $8M against $39.9M in revenue puts blended margin at roughly 20%, with an average order value of $404.11.',
    ],
    recommendations: [
      'Prioritize inventory, supplier, and marketing investment around the top revenue categories (informatica_acessorios, moveis_decoracao, cama_mesa_banho) rather than spreading budget evenly across all 74 categories.',
      'Reduce dependency on a single payment method by incentivizing boleto/voucher adoption, or negotiate better credit-card processing rates given how concentrated that channel is.',
      'Launch a retention play (loyalty perks, post-purchase email flow, reorder discounts) — moving even a few points of the 87% one-time-buyer base to repeat purchasers would have an outsized revenue impact.',
      'Investigate the months with 15-16 day average delivery times specifically, rather than treating delivery performance as a single yearly average, to find the root cause behind the worst-performing periods.',
    ],
    githubUrl: 'https://github.com/yousefwanass/Brazilian-E-Commerce_Project', // PLACEHOLDER
    dashboardUrl: '', // PLACEHOLDER
    caseStudyAvailable: true,
    featured: true,
  },
{
    id: 'data-professional-survey',
    title: 'Data Professional Survey Breakdown',
    tagline:
      'Power BI analysis of a 630-response survey of data professionals — salary, satisfaction, and career-entry patterns.',
    businessProblem:
      'People trying to break into or benchmark themselves in the data field lack a clear picture of realistic salaries, satisfaction levels, and skill expectations across roles, industries, and countries. This project turns a raw 630-response survey into a single dashboard that answers those questions directly.',
    tools: ['Power BI', 'DAX', 'Power Query'],
    dataset: {
      source: 'Data Professional Survey (public survey dataset)',
      records: '630 responses',
      columns: '~20 columns across 13 question groups (Q1–Q13), with the multi-part happiness question split into 6 sub-columns',
      mainTables: 'Single flat "Data Professional Survey" table',
    },
    dataCleaning: [
      'Cleaned and shaped the raw survey export entirely in Power Query — no separate SQL or Python step was needed for this dataset.',
      'Built a calculated Average Salary column from the reported minimum and maximum yearly salary range per respondent, since the raw data only gave a range rather than a single figure.',
      'Handled respondents who reported $0 minimum salary (students / not currently employed) rather than treating them as data errors, since that reflects a real "Student/Looking" segment in the survey.',
      'Kept the multi-part "How Happy are you in your Current Position" question (Salary, Work/Life Balance, Coworkers, Management, Upward Mobility, Learning New Things) as separate columns rather than collapsing it, so each satisfaction dimension could be analyzed independently.',
    ],
    analysis: [
      'Built a single-page executive-style dashboard covering demographics, salary by title/country/industry, programming language preference, and position satisfaction.',
      'Compared average salary across job titles (Data Scientist, Data Architect, Data Engineer, Data Analyst, Database roles) to map a realistic career-progression pay curve.',
      'Compared average salary by country to quantify the regional pay gap for the same roles.',
      'Measured happiness-with-salary versus happiness-with-position separately rather than as one blended "job satisfaction" score.',
    ],
    sqlHighlights: [],
    pythonHighlights: [],
    dashboardImages: ['/projects/data-survey/survey-breakdown.png'],
    insights: [
      'Python dominates language preference: 420 of 630 respondents (roughly two-thirds) picked it, far ahead of R (101) and every other language combined.',
      'Respondents are more satisfied with their actual work than with their pay: average happiness with position sits at 5.74/10 versus 4.27/10 for happiness with salary.',
      'Salary scales steeply with seniority: Data Scientist averages $88.3K versus $55.3K for Data Analyst and $26.6K for the Student/Looking segment — roughly a 3x spread across the career ladder.',
      'Geography drives pay as much as title does: United States respondents average $77.7K versus $29.9K in India and $32.0K for other countries.',
      'Data roles are not concentrated in the Tech industry: "Other" industries (205 respondents) actually outnumber Tech (150), showing demand for data skills is broad-based rather than tech-sector-exclusive.',
    ],
    recommendations: [
      'Someone breaking into data should set entry-point expectations around $26–33K (Student/Looking, Database roles) with a realistic path to $55K+ as an Analyst and $88K+ at Data Scientist level, rather than benchmarking against senior salaries.',
      'Prioritize Python fluency above other languages first — the roughly 4:1 preference over R makes it the highest-leverage skill investment for someone new to the field.',
      'Job seekers outside the US/UK/Canada should factor in a real regional pay gap when negotiating remote roles or considering relocation.',
      'Since position satisfaction outpaces salary satisfaction, teams focused on retaining data talent should prioritize compensation review over changing job content or scope.',
    ],
    githubUrl: 'https://github.com/yousefwanass/Data_Professional_Survey_Analysis_Using_PowerBi', // PLACEHOLDER
    dashboardUrl: '', // PLACEHOLDER
    caseStudyAvailable: true,
    featured: false,
  },
  // ── Template for a new project ────────────────────────────────────────
  // {
  //   id: 'unique-slug',
  //   title: '',
  //   tagline: '',
  //   businessProblem: '',
  //   dataset: { source: '', records: '', columns: '', mainTables: '' },
  //   tools: [],
  //   dataCleaning: [],
  //   analysis: [],
  //   sqlHighlights: [{ label: '', code: '' }],
  //   pythonHighlights: [],
  //   dashboardImages: [],
  //   insights: [],
  //   recommendations: [],
  //   githubUrl: '',
  //   dashboardUrl: '',
  //   caseStudyAvailable: true,
  //   featured: false,
  // },
]

export default projects
