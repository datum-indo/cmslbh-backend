import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityLitWhereInput } from "../../../inputs/CaseProgressActivityLitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseProgressActivityLitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityLitWhereInput | undefined;
}
