import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkCreateWithoutCaseInput } from "../inputs/CasePkCreateWithoutCaseInput";
import { CasePkUpdateWithoutCaseInput } from "../inputs/CasePkUpdateWithoutCaseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkUpsertWithoutCaseInput {
  @TypeGraphQL.Field(_type => CasePkUpdateWithoutCaseInput, {
    nullable: false
  })
  update!: CasePkUpdateWithoutCaseInput;

  @TypeGraphQL.Field(_type => CasePkCreateWithoutCaseInput, {
    nullable: false
  })
  create!: CasePkCreateWithoutCaseInput;
}
