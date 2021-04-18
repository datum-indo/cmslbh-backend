import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitWhereUniqueInput } from "../inputs/CaseProgressActivityNonlitWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityNonlitWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput, {
    nullable: false
  })
  create!: CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput;
}
