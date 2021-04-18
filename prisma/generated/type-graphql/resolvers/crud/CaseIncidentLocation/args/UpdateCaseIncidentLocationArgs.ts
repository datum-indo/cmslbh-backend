import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIncidentLocationUpdateInput } from "../../../inputs/CaseIncidentLocationUpdateInput";
import { CaseIncidentLocationWhereUniqueInput } from "../../../inputs/CaseIncidentLocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCaseIncidentLocationArgs {
  @TypeGraphQL.Field(_type => CaseIncidentLocationUpdateInput, {
    nullable: false
  })
  data!: CaseIncidentLocationUpdateInput;

  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIncidentLocationWhereUniqueInput;
}
