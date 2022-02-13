import { ArtifactSubstat } from "./artifact-substat.model";

export class Artifact {
    id?: number;
    artifactType?: any;
    artifactSetType?: any;
    mainstat?: any;
    mainStatValue?: any;
    artifactSubstats?: ArtifactSubstat[];
}
