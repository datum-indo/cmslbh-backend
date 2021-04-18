import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkCreateWithoutCaseInput } from "../inputs/CasePkCreateWithoutCaseInput";
import { CasePkWhereUniqueInput } from "../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkCreateOrConnectWithoutCaseInput {
  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: false
  })
  where!: CasePkWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePkCreateWithoutCaseInput, {
    nullable: false
  })
  create!: CasePkCreateWithoutCaseInput;
}
