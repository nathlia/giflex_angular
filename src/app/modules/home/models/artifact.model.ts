import { Substat } from "./substat.model";

export class Artifact {
    id?: number;
    artifactType?: any;
    artifactSetType?: any;
    mainstat?: any;
    mainStatValue?: any;
    artifactSubstats?: Substat[];
}
