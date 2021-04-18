import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseDocumentCreateWithoutCaseInput } from "../inputs/CaseDocumentCreateWithoutCaseInput";
import { CaseDocumentUpdateWithoutCaseInput } from "../inputs/CaseDocumentUpdateWithoutCaseInput";
import { CaseDocumentWhereUniqueInput } from "../inputs/CaseDocumentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseDocumentUpsertWithWhereUniqueWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: CaseDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseDocumentUpdateWithoutCaseInput, {
    nullable: false
  })
  update!: CaseDocumentUpdateWithoutCaseInput;

  @TypeGraphQL.Field(_type => CaseDocumentCreateWithoutCaseInput, {
    nullable: false
  })
  create!: CaseDocumentCreateWithoutCaseInput;
}
