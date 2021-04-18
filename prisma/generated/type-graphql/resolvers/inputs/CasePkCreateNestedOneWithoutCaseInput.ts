import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkCreateOrConnectWithoutCaseInput } from "../inputs/CasePkCreateOrConnectWithoutCaseInput";
import { CasePkCreateWithoutCaseInput } from "../inputs/CasePkCreateWithoutCaseInput";
import { CasePkWhereUniqueInput } from "../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkCreateNestedOneWithoutCaseInput {
  @TypeGraphQL.Field(_type => CasePkCreateWithoutCaseInput, {
    nullable: true
  })
  create?: CasePkCreateWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CasePkCreateOrConnectWithoutCaseInput, {
    nullable: true
  })
  connectOrCreate?: CasePkCreateOrConnectWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: true
  })
  connect?: CasePkWhereUniqueInput | undefined;
}
