import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityWhereInput } from "../../../inputs/CaseProgressActivityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseProgressActivityArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityWhereInput | undefined;
}
