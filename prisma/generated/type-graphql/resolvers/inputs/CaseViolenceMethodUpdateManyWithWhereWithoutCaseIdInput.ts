import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolenceMethodScalarWhereInput } from "../inputs/CaseViolenceMethodScalarWhereInput";
import { CaseViolenceMethodUpdateManyMutationInput } from "../inputs/CaseViolenceMethodUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolenceMethodUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseViolenceMethodScalarWhereInput, {
    nullable: false
  })
  where!: CaseViolenceMethodScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseViolenceMethodUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseViolenceMethodUpdateManyMutationInput;
}
