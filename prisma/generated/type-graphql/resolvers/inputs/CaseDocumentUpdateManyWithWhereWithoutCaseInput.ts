import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseDocumentScalarWhereInput } from "../inputs/CaseDocumentScalarWhereInput";
import { CaseDocumentUpdateManyMutationInput } from "../inputs/CaseDocumentUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseDocumentUpdateManyWithWhereWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseDocumentScalarWhereInput, {
    nullable: false
  })
  where!: CaseDocumentScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseDocumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseDocumentUpdateManyMutationInput;
}
