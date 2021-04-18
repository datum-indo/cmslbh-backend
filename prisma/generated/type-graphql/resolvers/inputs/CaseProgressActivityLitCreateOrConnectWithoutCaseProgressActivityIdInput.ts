import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityLitWhereUniqueInput } from "../inputs/CaseProgressActivityLitWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityLitWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput, {
    nullable: false
  })
  create!: CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput;
}
