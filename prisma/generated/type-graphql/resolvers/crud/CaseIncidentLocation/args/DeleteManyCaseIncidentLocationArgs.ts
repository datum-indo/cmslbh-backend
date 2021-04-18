import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIncidentLocationWhereInput } from "../../../inputs/CaseIncidentLocationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseIncidentLocationArgs {
  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereInput, {
    nullable: true
  })
  where?: CaseIncidentLocationWhereInput | undefined;
}
