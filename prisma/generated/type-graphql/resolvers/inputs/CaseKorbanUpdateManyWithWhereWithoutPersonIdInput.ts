import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseKorbanScalarWhereInput } from "../inputs/CaseKorbanScalarWhereInput";
import { CaseKorbanUpdateManyMutationInput } from "../inputs/CaseKorbanUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseKorbanUpdateManyWithWhereWithoutPersonIdInput {
  @TypeGraphQL.Field(_type => CaseKorbanScalarWhereInput, {
    nullable: false
  })
  where!: CaseKorbanScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseKorbanUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseKorbanUpdateManyMutationInput;
}
