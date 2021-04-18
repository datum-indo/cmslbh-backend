import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseClassificationScalarWhereInput } from "../inputs/CaseClassificationScalarWhereInput";
import { CaseClassificationUpdateManyMutationInput } from "../inputs/CaseClassificationUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseClassificationUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseClassificationScalarWhereInput, {
    nullable: false
  })
  where!: CaseClassificationScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseClassificationUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseClassificationUpdateManyMutationInput;
}
