import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitWhereUniqueInput } from "../inputs/CaseProgressActivityNonlitWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityNonlitUpdateWithWhereUniqueWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityNonlitWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdInput, {
    nullable: false
  })
  data!: CaseProgressActivityNonlitUpdateWithoutCaseProgressActivityIdInput;
}
