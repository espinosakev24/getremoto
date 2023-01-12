INSERT INTO companies (id, name, website_url, company_image)
VALUES 
  ('0185a7ec-92b6-3831-ffbd-5dd8619c3ec4', 'UruIT', 'https://uruit.com/', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/UruIT_logo.png/480px-UruIT_logo.png'),
  ('0185a7ed-9c10-c44d-ddf6-2854172f4f89', 'Wizeline', 'https://www.wizeline.com/', 'https://cdn.wizeline.com/uploads/2021/11/Asset-125-e1645118179495.png');

INSERT INTO openings (company_id, id, slug, title)
VALUES 
  ('0185a7ec-92b6-3831-ffbd-5dd8619c3ec4', '0185a7ee-6202-31ce-593d-a31f56dcc577', 'uruit-senior-react-node-developer', 'Senior React/Node Developer'),
  ('0185a7ec-92b6-3831-ffbd-5dd8619c3ec4', '0185a7f1-2af3-2feb-7d36-886b8f37c786', 'uruit-farming-lead', 'Farming Lead'),
  ('0185a7ed-9c10-c44d-ddf6-2854172f4f89', '0185a7f4-98b6-113a-e74d-b1cffc48f319', 'wizeline-android-software-engineer', 'Android Software Engineer'),
  ('0185a7ed-9c10-c44d-ddf6-2854172f4f89', '0185a7f4-c3cd-67a8-b6e3-5856e0d2810e', 'wizeline-ios-software-engineer', 'iOS Software Engineer'),
  ('0185a7ed-9c10-c44d-ddf6-2854172f4f89', '0185a7f4-e8f4-a668-ae4c-12f0d6adda16', 'wizeline-java-software-engineer', 'Java Software Engineer');