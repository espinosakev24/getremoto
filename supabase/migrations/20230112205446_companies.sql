CREATE TABLE companies (
  id UUID NOT NULL DEFAULT generate_ulid(),
  name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  company_image TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE openings (
  id UUID NOT NULL DEFAULT generate_ulid(),
  company_id UUID NOT NULL REFERENCES companies(id),
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  PRIMARY KEY (id)
);