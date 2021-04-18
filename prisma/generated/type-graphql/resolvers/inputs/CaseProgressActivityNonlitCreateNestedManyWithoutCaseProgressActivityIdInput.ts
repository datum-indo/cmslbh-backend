import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitWhereUniqueInput } from "../inputs/CaseProgressActivityNonlitWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  create?: CaseProgressActivityNonlitCreateWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityNonlitCreateOrConnectWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityNonlitWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseProgressActivityNonlitWhereUniqueInput[] | undefined;
}
