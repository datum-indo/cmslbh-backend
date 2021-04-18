import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIncidentLocationUpdateManyMutationInput } from "../../../inputs/CaseIncidentLocationUpdateManyMutationInput";
import { CaseIncidentLocationWhereInput } from "../../../inputs/CaseIncidentLocationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCaseIncidentLocationArgs {
  @TypeGraphQL.Field(_type => CaseIncidentLocationUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseIncidentLocationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereInput, {
    nullable: true
  })
  where?: CaseIncidentLocationWhereInput | undefined;
}
