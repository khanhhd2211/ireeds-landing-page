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