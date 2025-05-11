interface Agency {
  id: number;
  name: string;
}

interface Company {
  id: number;
  name: string;
}

interface Office {
  id: number;
  name: string;
}

interface OrganizationalStructure {
  id: number;
  attributes: {
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    directly_affiliated_agencies: Agency[];
    subsidiary_companies: Company[];
    representative_offices: Office[];
  };
}
