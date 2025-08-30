export interface Employee {
  name: string;
  cpf: string;
  RG: string;
  gender: "male" | "female";
  birth: Date;
  job: string;
  useEPI: boolean;
  activities: Activity[];
  medicalCertificate: string;
  id: string;
  active: boolean;
}

export interface Activity {
  name: string;
  epi: EPI[];
}

export interface EPI {
  name: string;
  ca: string;
}
