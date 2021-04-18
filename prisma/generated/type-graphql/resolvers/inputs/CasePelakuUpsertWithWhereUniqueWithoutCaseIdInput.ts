import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuCreateWithoutCaseIdInput } from "../inputs/CasePelakuCreateWithoutCaseIdInput";
import { CasePelakuUpdateWithoutCaseIdInput } from "../inputs/CasePelakuUpdateWithoutCaseIdInput";
import { CasePelakuWhereUniqueInput } from "../inputs/CasePelakuWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuUpsertWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CasePelakuWhereUniqueInput, {
    nullable: false
  })
  where!: CasePelakuWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePelakuUpdateWithoutCaseIdInput, {
    nullable: false
  })
  update!: CasePelakuUpdateWithoutCaseIdInput;

  @TypeGraphQL.Field(_type => CasePelakuCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CasePelakuCreateWithoutCaseIdInput;
}
