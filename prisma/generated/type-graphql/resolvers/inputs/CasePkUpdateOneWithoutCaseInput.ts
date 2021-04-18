import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkCreateOrConnectWithoutCaseInput } from "../inputs/CasePkCreateOrConnectWithoutCaseInput";
import { CasePkCreateWithoutCaseInput } from "../inputs/CasePkCreateWithoutCaseInput";
import { CasePkUpdateWithoutCaseInput } from "../inputs/CasePkUpdateWithoutCaseInput";
import { CasePkUpsertWithoutCaseInput } from "../inputs/CasePkUpsertWithoutCaseInput";
import { CasePkWhereUniqueInput } from "../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkUpdateOneWithoutCaseInput {
  @TypeGraphQL.Field(_type => CasePkCreateWithoutCaseInput, {
    nullable: true
  })
  create?: CasePkCreateWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CasePkCreateOrConnectWithoutCaseInput, {
    nullable: true
  })
  connectOrCreate?: CasePkCreateOrConnectWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CasePkUpsertWithoutCaseInput, {
    nullable: true
  })
  upsert?: CasePkUpsertWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: true
  })
  connect?: CasePkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CasePkUpdateWithoutCaseInput, {
    nullable: true
  })
  update?: CasePkUpdateWithoutCaseInput | undefined;
}
