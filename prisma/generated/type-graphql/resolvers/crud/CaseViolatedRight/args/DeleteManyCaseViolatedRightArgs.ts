import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolatedRightWhereInput } from "../../../inputs/CaseViolatedRightWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCaseViolatedRightArgs {
  @TypeGraphQL.Field(_type => CaseViolatedRightWhereInput, {
    nullable: true
  })
  where?: CaseViolatedRightWhereInput | undefined;
}
