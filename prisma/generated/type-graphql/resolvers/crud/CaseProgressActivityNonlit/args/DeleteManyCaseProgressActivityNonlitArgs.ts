import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityNonlitWhereInput } from "../../../inputs/CaseProgressActivityNonlitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseProgressActivityNonlitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityNonlitWhereInput | undefined;
}
