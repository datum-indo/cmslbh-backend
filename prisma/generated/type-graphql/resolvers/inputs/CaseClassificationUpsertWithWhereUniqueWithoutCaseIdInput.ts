import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseClassificationCreateWithoutCaseIdInput } from "../inputs/CaseClassificationCreateWithoutCaseIdInput";
import { CaseClassificationUpdateWithoutCaseIdInput } from "../inputs/CaseClassificationUpdateWithoutCaseIdInput";
import { CaseClassificationWhereUniqueInput } from "../inputs/CaseClassificationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseClassificationUpsertWithWhereUniqueWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseClassificationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseClassificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseClassificationUpdateWithoutCaseIdInput, {
    nullable: false
  })
  update!: CaseClassificationUpdateWithoutCaseIdInput;

  @TypeGraphQL.Field(_type => CaseClassificationCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseClassificationCreateWithoutCaseIdInput;
}
