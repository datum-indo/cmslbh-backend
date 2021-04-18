import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput";
import { CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput } from "../inputs/CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput";
import { RenamedcaseCreateNestedOneWithoutActivitiesInput } from "../inputs/RenamedcaseCreateNestedOneWithoutActivitiesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  capaian?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hambatan?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  judulAktifitas?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  position?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rencanaStrategi?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  targetAdvokasi?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tglAktifitas?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutActivitiesInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput, {
    nullable: true
  })
  activitieslit?: CaseProgressActivityLitCreateNestedManyWithoutCaseProgressActivityIdInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput, {
    nullable: true
  })
  activitiesnonlit?: CaseProgressActivityNonlitCreateNestedManyWithoutCaseProgressActivityIdInput | undefined;
}
