import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIncidentLocationCreateInput } from "../../../inputs/CaseIncidentLocationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCaseIncidentLocationArgs {
  @TypeGraphQL.Field(_type => CaseIncidentLocationCreateInput, {
    nullable: false
  })
  data!: CaseIncidentLocationCreateInput;
}
