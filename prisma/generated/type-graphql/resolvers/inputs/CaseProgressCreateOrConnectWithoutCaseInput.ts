import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressCreateWithoutCaseInput } from "../inputs/CaseProgressCreateWithoutCaseInput";
import { CaseProgressWhereUniqueInput } from "../inputs/CaseProgressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressCreateOrConnectWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseProgressWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressCreateWithoutCaseInput, {
    nullable: false
  })
  create!: CaseProgressCreateWithoutCaseInput;
}
