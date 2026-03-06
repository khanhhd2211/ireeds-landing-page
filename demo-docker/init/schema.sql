-- demo-postgres/init/schema.sql

-- create a dedicated database
CREATE DATABASE demo;

-- switch to that database
\c demo   

-- create team members table
CREATE TABLE team_members (
    id   serial PRIMARY KEY,
    name text NOT NULL,
    title text,
    degree text,
    description text NOT NULL,
    image_url text,
    department text NOT NULL
);

INSERT INTO team_members (name, title, degree, description, image_url, department)
VALUES 
    ('Chon LE-VAN', '', 'PhD', 'PhD in Economics at University of Georgia, and Department Head at International University', 'images/chonle-le-van-chon.jpg', 'Board of Directors'),
    ('Tuan Anh LUONG', '', 'PhD', 'PhD in Economics at Princeton University, and Lecturer in Economics at De Montfort University (UK)', 'images/tuan-anh-luong.jpg', 'Board of Directors'),
    ('Huu Minh MAI', '', 'PhD', 'Founder and CEO of Intelligent Financial Research & Consulting (IFRC)', 'images/huhu_mi.jpg', 'Board of Directors'),
    ('Hien V.Nguyen', '', '', 'Scientist in Soils and Nutrient Management at the Soils and Fertilizers Research Institute, PhD in Environmental Economics at the University of Birmingham, UK', 'images/hien_v_nguyen.jpg', 'Scientific Network'),
    ('Son Nghiem', 'Asso. Prof.', 'PhD', 'PhD in Economics at University of Queensland, Associate Professor at Australian National University', 'images/son_nghiem.jpg', 'Scientific Network'),
    ('Viet Ngu Hoang', 'Asso. Prof.', 'PhD', 'Associate Professor at Queensland University of Technology, Member of Royal Economic Society', 'images/viet_ngu_hoang.jpg', 'Scientific Network'),
    ('Thong Nguyen – Huy','', 'PhD', 'PhD in Computational Statistics & Data Sciences from University of Southern Australia; received Award for Excellence in Doctoral Research', 'images/thong_nguyen_huy.jpg', 'Scientific Network'),
    ('Xuan Hong – DO', '', 'PhD', 'PhD at University of Adelaide, Research Fellow at School for Environment and Sustainability at University of Michigan', 'images/xuan_hong_do.jpg', 'Scientific Network'),
    ('Tuan Nguyen', '', 'MSc', 'PhD candidate at Hasselt University, Belgium and Master graduate in Economics & Ecology at Toulouse School of Economics, France', 'images/tuan_nguyen.jpg', 'Administration Office,Scientific Network'),
    ('Lan-Anh Thi NGUYEN', '', 'PhD', 'PhD under program between NAFOSTED and INRAE Montpellier, Program manager at Banking Academy', 'images/lan-anh.jpg', 'Administration Office,Scientific Network'),
    ('Toan Nguyen', '', 'PhD', 'Research Fellow at Development Policy Centre, Crawford School of Public Policy, ANU, and PhD at Curtin University', 'images/toannguyen.jpg', 'Scientific Network'),
    ('Vu Thi Thuong', '', 'PhD Candidate', 'MSc in Development Economics from Vietnam – The Netherlands programe (VNP) at the University of Economics, Ho Chi Minh City, lecturer at University of Da Nang', 'images/vu-thuong.jpg', 'Scientific Network'),
    ('Tran Nguyen Ngoc', '', 'PhD', 'Lecturer of SoICT, Hanoi University of Science and Technology; PhD in remote sensing from University of Technology Sydney in 2019', 'images/tran-nguyen-ngoc.jpg', 'Scientific Network'),
    ('Nguyen Huu Dung', '', 'PhD', 'PhD in Ecological economics from Seoul National University; and lecturer at National Economics University (Viet Nam)', 'images/230220231007-ts-nguyen-huu-dung-3.jpg', 'Scientific Network'),
    ('Manh-Hung Nguyen', '', 'PhD', 'Researcher at INRAE, member of Toulouse School of Economics', 'images/d95e08f2762ec437c885b1626ec7db6e.jpg', 'Scientific Network'),
    ('Minh Nhat Pham', '', 'PhD', 'Postdoctoral researcher at the Norwegian Institute of Public Health – PhD in natural and ecological economics at UiT The Arctic University of Norway', 'images/426620739_1788784801625083_6623956539586637544_n-2.jpg', 'Scientific Network'),
    ('Nguyen Ha My', '', 'BSc', 'Bachelor from Foreign Trade University, Vietnam', 'images/z4222455939788_a30c4eb7ebad8c3faab17bd4b26c94a2-1.jpg', 'Administration Office');

-- create research papers table
CREATE TABLE research_paper (
    id   serial PRIMARY KEY,
    fields text NOT NULL,
    title text NOT NULL,
    author text NOT NULL,
    description text NOT NULL,
    link text NOT NULL,
    image text
);

INSERT INTO research_paper (fields,title, author, description, link, image)
VALUES 
    ('sustainable-economy', 'Modelling optimal lockdowns with waning immunity', 'Goenka, A., Liu, L., & Nguyen, M.-H. (2022)', 'Modelling optimal lockdowns with waning immunity. Economic Theory. https://doi.org/10.1007/s00199-022-01468-8', 'https://doi.org/10.1007/s00199-022-01468-8', 'images/lock-down.jpg'),
    ('sustainable-economy', 'The Unequal Impact of the COVID Pandemic: Theory and Evidence on Health and Economic Outcomes for Different Income Groups', 'Aubert, C., Dang, H.-A., & Nguyen, M.-H. (2022)', 'The Unequal Impact of the COVID Pandemic: Theory and Evidence on Health and Economic Outcomes for Different Income Groups (SSRN Scholarly Paper No. 4151275).', 'https://doi.org/10.2139/ssrn.4151275', 'images/covid-impact.jpg'),
    ('sustainable-economy', 'Correction to: Is there a demand for flood insurance in Vietnam? Results from a choice experiment', 'Reynaud, A., Nguyen, M.-H., & Aubert, C. (2022)', 'Correction to: Is there a demand for flood insurance in Vietnam? Results from a choice experiment. Environmental Economics and Policy Studies, 24(2), 305–305.', 'https://doi.org/10.1007/s10018-022-00340-2', 'images/agri.jpg'),
    ('sustainable-economy', 'The relative roles of domestic and foreign capital in aggregate production of GDP and CO2-equivalent emission across OECD countries', 'Van Le, C., Luong, T. A., Nguyen, M.-H., & Hoang, V.-N. (2023)', 'The relative roles of domestic and foreign capital in aggregate production of GDP and CO2-equivalent emission across OECD countries. Environmental Science and Pollution Research, 30(11), 32052–32064.', 'https://doi.org/10.1007/s11356-022-24208-w', 'images/oecd-capital.jpg'),
    ('sustainable-economy,climate-change', 'Vulnerability to Natural Disaster and Welfare Effect: A Case Study of Flood Risk in Vietnam''s North Central Region', 'Nguyen, M.-H., Le, D. P., & Vo, T. T. (2021)', 'Vulnerability to Natural Disaster and Welfare Effect: A Case Study of Flood Risk in Vietnam''s North Central Region. Journal of Asian and African Studies, 56(8), 1879–1898.', 'https://doi.org/10.1177/00219096211993499', 'images/flood-risk.jpg'),
    ('sustainable-economy', 'COVID-19 and a Green Recovery?', 'Goenka, A., Liu, L., & Nguyen, M.-H. (2021)', 'COVID-19 and a Green Recovery? Economic Modelling, 104, 105639.', 'https://doi.org/10.1016/j.econmod.2021.105639', 'images/green-recovery.jpg'),
    ('sustainable-economy', 'Modeling transformation in Vietnam using smooth transitions', 'Nguyen Khac Minh, Manh-Hung Nguyen and Nguyen Viet Hung (2011)', 'Modeling transformation in Vietnam using smooth transitions. Environmental Economics, 2(3)', 'https://www.businessperspectives.org/images/pdf/applications/publishing/templates/article/assets/9330/ee_2011_03_Minh.pdf', 'images/transformation.jpg'),
    ('sustainable-economy', 'General existence of competitive equilibrium in the growth model with an endogenous labor–leisure choice', 'Goenka, A., & Nguyen, M.-H. (2020)', 'General existence of competitive equilibrium in the growth model with an endogenous labor–leisure choice. Journal of Mathematical Economics, 91, 90–98.', 'https://doi.org/10.1016/j.jmateco.2020.08.004', 'images/equilibrium.jpg'),
    ('sustainable-economy', 'Is Green Growth Possible in Vietnam? The Case of Marine Capture Fisheries', 'Nguyen, T. V., Nguyen, M. H., & Le Van, Q. (2018)', 'Is Green Growth Possible in Vietnam? The Case of Marine Capture Fisheries. BioPhysical Economics and Resource Quality, 3(3), 9.', 'https://doi.org/10.1007/s41247-018-0044-5', 'images/green-growth.jpg'),
    ('energy', 'Decomposed and partial connectedness between economic globalization, non-renewable and renewable energy consumption in Vietnam', 'Ha, L. T., Hung, N. M., & Van Chon, L. (2023)', 'Decomposed and partial connectedness between economic globalization, non-renewable and renewable energy consumption in Vietnam. Environmental Science and Pollution Research, 1-21.', 'https://link.springer.com/article/10.1007/s11356-023-25158-7', 'images/oecd-capital.jpg'),
    ('energy', 'The production inefficiency of US electricity industry in the face of restructuring and emission reduction', 'Nguyen, M.-H., Le, C. V., & Atkinson, S. E. (2022)', 'The production inefficiency of US electricity industry in the face of restructuring and emission reduction. Journal of Economics and Development, 24(4), 278–292.', 'https://doi.org/10.1108/JED-07-2022-0127', 'images/us-electricity.jpg'),
    ('energy', 'The Fossil Energy Interlude: Optimal Building, Maintaining and Scraping a Dedicated Capital, and the Hotelling Rule', 'Nguyen, M. H. (2019)', 'The Fossil Energy Interlude: Optimal Building, Maintaining and Scraping a Dedicated Capital, and the Hotelling Rule.', 'https://faere.fr/pub/WorkingPapers/Amigues_Moreaux_Nguyen_FAERE.WP2019.07.pdf', 'images/fossil-energy.jpg'),
    ('climate-change', 'The impact of cold waves and heat waves on mortality: Evidence from a lower middle-income country', 'Nguyen, C. V., Nguyen, M.-H., & Nguyen, T. T. (n.d.)', 'The impact of cold waves and heat waves on mortality: Evidence from a lower middle-income country. Health Economics, n/a(n/a).', 'https://doi.org/10.1002/hec.4663', 'images/heat-waves.jpg'),
    ('climate-change', 'Rainfall variability and internal migration: The importance of agriculture linkage and gender inequality', 'Luong, T. A., Nguyen, M.-H., Truong, N. T. K., & Le, K. (2023)', 'Rainfall variability and internal migration: The importance of agriculture linkage and gender inequality. Economic Analysis and Policy, 77, 326–336.', 'https://doi.org/10.1016/j.eap.2022.11.021', 'images/rainfall-migration.jpg'),
    ('climate-change', 'Sustainable development and environmental policy: The engagement of stakeholders in green products in Vietnam', 'Le Van, Q., Viet Nguyen, T., & Nguyen, M. H. (2019)', 'Sustainable development and environmental policy: The engagement of stakeholders in green products in Vietnam. Business Strategy and the Environment, 28(5), 675–687.', 'https://doi.org/10.1002/bse.2272', 'images/green-products.jpg'),
    ('climate-change', 'A resilient energy system to climate change', 'M-H. Nguyen et al (2021)', 'A resilient energy system to climate change, chapter 5 in the book "Climate Change in VietNam: Impacts and adaptation, a COP26 assessment report of the Gemmes VietNam project", 2021.', '', 'images/climate-report.jpg'),
    ('climate-change', 'Quality of Life and Climate Change: Evidence from the SHARE Dataset', 'Luong, T. A., & Nguyen, M. H. (2022)', 'Quality of Life and Climate Change: Evidence from the SHARE Dataset. Available at SSRN 4091827.', '', 'images/flood-risk.jpg'),
    ('climate-change', 'Climate change in Viet Nam, impacts and adaptation: a COP26 assessment report of the GEMMES Viet Nam project', 'Espagne, E., Thanh, N. D., Manh, H. N., Pannier, E., Woilliez, M. N., Drogoul, A., ... & Canh, T. V. (2021)', 'Climate change in Viet Nam, impacts and adaptation: a COP26 assessment report of the GEMMES Viet Nam project', '', 'images/climate-report.jpg'),
    ('coastal', 'Economic analysis of choices among differing measures to manage coastal erosion in Hoi An (a UNESCO World Heritage Site)', 'Nguyen, M. H., Nguyen, T. L. A., Nguyen, T., Reynaud, A., Simioni, M., & Hoang, V. N. (2021)', 'Economic analysis of choices among differing measures to manage coastal erosion in Hoi An (a UNESCO World Heritage Site). Economic Analysis and Policy, 70, 529-543.', 'https://doi.org/10.1016/j.eap.2021.05.004', 'images/rainfall-migration.jpg'),
    ('coastal', 'Economic valuation of coastal erosion in Vietnam: an empirical approach', 'Thi Lan Anh Nguyen (2021)', 'Economic valuation of coastal erosion in Vietnam: an empirical approach. Economics and Finance. Institut Agro – Montpellier SupAgro, 2021. English. ffNNT: ff-fftel-03889049f', 'https://theses.hal.science/tel-03889049', 'images/coastal-valuation.jpg'),
    ('health', 'SiR economic epidemiological models with disease induced mortality', 'Goenka, A., Liu, L., & Nguyen, M.-H. (2021a)', 'SiR economic epidemiological models with disease induced mortality. Journal of Mathematical Economics, 93, 102476.', 'https://doi.org/10.1016/j.jmateco.2020.102476', 'images/equilibrium.jpg'),
    ('health', 'Modeling optimal quarantines with waning immunity', 'Goenka, A., Liu, L., & Nguyen, M.-H. (2021b, May)', 'Modeling optimal quarantines with waning immunity [Monograph]. TSE Working Paper.', 'http://tse-fr.eu/pub/125549', 'images/quarantine.jpg'),
    ('health', 'Modeling optimal quarantines under infectious disease related mortality', 'Liu, A. G. L., & Nguyen, M.-H. (2020)', 'Modeling optimal quarantines under infectious disease related mortality.', '', 'images/quarantines-mortality.jpg'),
    ('health', 'Does the Covid-19 pandemic disproportionately affect the poor? Evidence from a six-country survey', 'Dang, H.-A., Huynh, T. L. D., & Nguyen, M.-H. (2020)', 'Does the Covid-19 Pandemic Disproportionately Affect the Poor? Evidence from a Six-Country Survey (SSRN Scholarly Paper No. 3627054).', 'https://doi.org/10.2139/ssrn.3627054', 'images/covid-19.jpg'),
    ('health', 'Infectious diseases and economic growth', 'Goenka, A., Liu, L., & Nguyen, M.-H. (2014)', 'Infectious diseases and economic growth. Journal of Mathematical Economics, 50, 34–53.', 'https://doi.org/10.1016/j.jmateco.2013.10.004', 'images/equilibrium.jpg'),
    ('agriculture', 'Effectiveness of different biochar in aqueous zinc removal: Correlation with physicochemical characteristics', 'Van Hien, N., Valsami-Jones, E., Vinh, N. C., Phu, T. T., Tam, N. T. T., & Lynch, I. (2020)', 'Effectiveness of different biochar in aqueous zinc removal: Correlation with physicochemical characteristics. Bioresource Technology Reports, 11, 100466.', 'https://doi.org/10.1016/j.btteb.2020.100466', 'images/biochar-zinc-removal.jpg'),
    ('agriculture', 'Biochar Treatment and its Effects on Rice and Vegetable Yields in Mountainous Areas of Northern Vietnam', 'Vinh, N. C., Hien, N., Anh, M., Lehmann, J., & Joseph, S. (2014)', 'Biochar treatment and its effects on rice and vegetable yields in mountainous areas of northern Vietnam. International Journal of Agricultural and Soil Science, 2, 5–13.', '', 'images/agriculture.jpg');