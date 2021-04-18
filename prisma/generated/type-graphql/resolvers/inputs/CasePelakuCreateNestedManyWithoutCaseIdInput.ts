import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuCreateOrConnectWithoutCaseIdInput } from "../inputs/CasePelakuCreateOrConnectWithoutCaseIdInput";
import { CasePelakuCreateWithoutCaseIdInput } from "../inputs/CasePelakuCreateWithoutCaseIdInput";
import { CasePelakuWhereUniqueInput } from "../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CasePelakuCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CasePelakuCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CasePelakuCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CasePelakuWhereUniqueInput], {
    nullable: true
  })
  connect?: CasePelakuWhereUniqueInput[] | undefined;
}
