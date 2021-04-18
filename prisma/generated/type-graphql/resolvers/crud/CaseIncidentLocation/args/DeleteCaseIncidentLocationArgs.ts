import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIncidentLocationWhereUniqueInput } from "../../../inputs/CaseIncidentLocationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCaseIncidentLocationArgs {
  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIncidentLocationWhereUniqueInput;
}
