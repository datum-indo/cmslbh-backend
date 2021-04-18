import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressCreateOrConnectWithoutCaseInput } from "../inputs/CaseProgressCreateOrConnectWithoutCaseInput";
import { CaseProgressCreateWithoutCaseInput } from "../inputs/CaseProgressCreateWithoutCaseInput";
import { CaseProgressWhereUniqueInput } from "../inputs/CaseProgressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressCreateNestedOneWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseProgressCreateWithoutCaseInput, {
    nullable: true
  })
  create?: CaseProgressCreateWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressCreateOrConnectWithoutCaseInput, {
    nullable: true
  })
  connectOrCreate?: CaseProgressCreateOrConnectWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseProgressWhereUniqueInput | undefined;
}
