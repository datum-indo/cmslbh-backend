import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIncidentLocationCreateInput } from "../../../inputs/CaseIncidentLocationCreateInput";
import { CaseIncidentLocationUpdateInput } from "../../../inputs/CaseIncidentLocationUpdateInput";
import { CaseIncidentLocationWhereUniqueInput } from "../../../inputs/CaseIncidentLocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCaseIncidentLocationArgs {
  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIncidentLocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseIncidentLocationCreateInput, {
    nullable: false
  })
  create!: CaseIncidentLocationCreateInput;

  @TypeGraphQL.Field(_type => CaseIncidentLocationUpdateInput, {
    nullable: false
  })
  update!: CaseIncidentLocationUpdateInput;
}
