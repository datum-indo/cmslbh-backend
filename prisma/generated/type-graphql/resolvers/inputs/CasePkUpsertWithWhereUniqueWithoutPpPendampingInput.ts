import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkCreateWithoutPpPendampingInput } from "../inputs/CasePkCreateWithoutPpPendampingInput";
import { CasePkUpdateWithoutPpPendampingInput } from "../inputs/CasePkUpdateWithoutPpPendampingInput";
import { CasePkWhereUniqueInput } from "../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkUpsertWithWhereUniqueWithoutPpPendampingInput {
  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: false
  })
  where!: CasePkWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePkUpdateWithoutPpPendampingInput, {
    nullable: false
  })
  update!: CasePkUpdateWithoutPpPendampingInput;

  @TypeGraphQL.Field(_type => CasePkCreateWithoutPpPendampingInput, {
    nullable: false
  })
  create!: CasePkCreateWithoutPpPendampingInput;
}
