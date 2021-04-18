import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressWhereInput } from "../../../inputs/CaseProgressWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseProgressArgs {
  @TypeGraphQL.Field(_type => CaseProgressWhereInput, {
    nullable: true
  })
  where?: CaseProgressWhereInput | undefined;
}
