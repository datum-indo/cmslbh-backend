import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityLitWhereUniqueInput } from "../inputs/CaseProgressActivityLitWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => [CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  create?: CaseProgressActivityLitCreateWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityLitCreateOrConnectWithoutCaseProgressActivityIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseProgressActivityLitWhereUniqueInput[] | undefined;
}
